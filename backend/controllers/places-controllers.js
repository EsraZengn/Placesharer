const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
const fs = require('fs');
const getCoordsForAddress = require('../util/location');
const HttpError = require('../models/http-error');
const Place = require('../models/place');
const User = require('../models/user');

const getPlaceById = async (req, res, next) => {
  const placeId = req.params.pid;
  try {
    const place = await Place.findById(placeId);
    if (!place) {
      return next(new HttpError('Could not find a place for the provided id.', 404));
    }
    res.json({ place: place.toObject({ getters: true }) });
  } catch (error) {
    return next(new HttpError('Something went wrong, could not find the place.', 500));
  }
};

const getPlacesByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  try {
    const user = await User.findById(userId).populate('places');
    if (!user || user.places.length === 0) {
      return next(new HttpError('Could not find any place for the provided user id.', 404));
    }
    res.json({ places: user.places.map((place) => place.toObject({ getters: true })) });
  } catch (error) {
    return next(new HttpError('Fetching places for the user failed, please try again later.', 500));
  }
};

const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError('Invalid input(s) passed, please check your data.', 422));
  }

  const { title, description, address } = req.body;

  try {
    const coordinates = await getCoordsForAddress(address);

    const createdPlace = new Place({
      title,
      description,
      address,
      location: coordinates,
      image: req.file.path,
      creator: req.userData.userId,
    });

    const user = await User.findById(req.userData.userId);
    if (!user) {
      return next(new HttpError('Could not find user for provided id', 404));
    }

    const session = await mongoose.startSession();
    session.startTransaction();
    await createdPlace.save({ session });
    user.places.push(createdPlace);
    await user.save({ session });
    await session.commitTransaction();

    res.status(201).json({ place: createdPlace });
  } catch (error) {
    return next(new HttpError('Creating place failed, please try again.', 500));
  }
};

const updatePlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError('Invalid input(s) passed, please check your data.', 422));
  }

  const placeId = req.params.pid;
  const { title, description } = req.body;

  try {
    const place = await Place.findById(placeId);

    if (place.creator.toString() !== req.userData.userId) {
      return next(new HttpError('You are not allowed to edit this place.', 401));
    }

    place.title = title;
    place.description = description;

    await place.save();

    res.status(200).json({ place: place.toObject({ getters: true }) });
  } catch (error) {
    return next(new HttpError('Something went wrong, could not update place.', 500));
  }
};

const deletePlace = async (req, res, next) => {
  const placeId = req.params.pid;

  try {
    const place = await Place.findById(placeId).populate('creator');
    if (!place) {
      return next(new HttpError('Could not find a place for this id.', 404));
    }

    if (place.creator.id !== req.userData.userId) {
      return next(new HttpError('You are not allowed to delete this place.', 401));
    }

    const imagePath = place.image;

    const session = await mongoose.startSession();
    session.startTransaction();
    await place.remove({ session });
    place.creator.places.pull(place);
    await place.creator.save({ session });
    await session.commitTransaction();

    fs.unlink(imagePath, (err) => console.error(err));

    res.status(200).json({ message: 'Deleted place' });
  } catch (error) {
    return next(new HttpError('Failed to delete place', 500));
  }
};

module.exports = {
  getPlaceById,
  getPlacesByUserId,
  createPlace,
  updatePlace,
  deletePlace,
};
