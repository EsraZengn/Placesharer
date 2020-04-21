const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
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

  const { title, description, address, creator } = req.body;

  try {
    const coordinates = await getCoordsForAddress(address);
    const createdPlace = new Place({
      title,
      description,
      address,
      location: coordinates,
      image: 'https://www.great-towers.com/sites/default/files/2019-07/tower_0.jpg',
      creator,
    });

    const user = await User.findById(creator);
    if (!user) {
      return next(new HttpError('Could not find user for provided id', 404));
    }

    const session = await mongoose.startSession();
    session.startTransaction();
    await createdPlace.save({ session });
    user.places.push(createdPlace);
    await user.save({ session });
    session.commitTransaction();

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
    const updatedPlace = await Place.findOneAndUpdate(
      { _id: placeId },
      { title, description },
      { new: true },
    );
    res.status(200).json({ place: updatedPlace.toObject({ getters: true }) });
  } catch (error) {
    return next(new HttpError('Something went wrong, could not update place.', 500));
  }
};

const deletePlace = async (req, res, next) => {
  const placeId = req.params.pid;

  try {
    const place = await Place.findById(placeId).populate('creator');

    const session = await mongoose.startSession();
    session.startTransaction();
    await place.remove({ session });
    place.creator.places.pull(place);
    await place.creator.save({ session });
    session.commitTransaction();

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
