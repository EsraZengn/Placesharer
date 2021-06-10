const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const HttpError = require('../models/http-error');
const User = require('../models/user');

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, '-password');
    res.json({ users: users.map((user) => user.toObject({ getters: true })) });
  } catch (error) {
    return next(new HttpError('Could not fetch users,please try again later', 500));
  }
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError('Invalid input(s) passed, please check your data.', 422));
  }

  const { name, email, password } = req.body;

  try {
    const hasUser = await User.findOne({ email });
    if (hasUser) {
      return next(new HttpError('User exists already, please login instead.', 422));
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const createdUser = new User({
      name,
      email,
      image: req.file.path,
      password: hashedPassword,
      places: [],
    });

    await createdUser.save();

    const token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      process.env.JWT_KEY,
      {
        expiresIn: '1h',
      },
    );

    res.status(201).json({ userId: createdUser.id, email: createdUser.email, token });
  } catch (error) {
    return next(new HttpError('Signing up failed, please try again later.', 500));
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const loggedInUser = await User.findOne({ email });
    if (!loggedInUser) {
      return next(new HttpError('Could not identify user, invalid credentials', 403));
    }

    const isValidPassword = await bcrypt.compare(password, loggedInUser.password);

    if (!isValidPassword) {
      return next(new HttpError('Could not identify user, invalid credentials', 403));
    }

    const token = jwt.sign(
      { userId: loggedInUser.id, email: loggedInUser.email },
      process.env.JWT_KEY,
      {
        expiresIn: '1h',
      },
    );

    res.json({ userId: loggedInUser.id, email: loggedInUser.email, token });
  } catch (error) {
    return next(new HttpError('Logging in failed, please try again later', 500));
  }
};

module.exports = { getUsers, signup, login };
