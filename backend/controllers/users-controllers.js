const { validationResult } = require('express-validator');
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
    const createdUser = new User({
      name,
      email,
      image: req.file.path,
      password,
      places: [],
    });

    await createdUser.save();

    res.status(201).json({ user: createdUser.toObject({ getters: true }) });
  } catch (error) {
    return next(new HttpError('Signing up failed, please try again later.', 500));
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const loggedInUser = await User.findOne({ email, password });
    if (!loggedInUser || loggedInUser.password !== password) {
      return next(new HttpError('Could not identify user, credentials seem to be wrong', 401));
    }

    res.json({ message: 'Logged in.', user: loggedInUser.toObject({ getters: true }) });
  } catch (error) {
    return next(new HttpError('Logging in failed, please try again later', 500));
  }
};

module.exports = { getUsers, signup, login };
