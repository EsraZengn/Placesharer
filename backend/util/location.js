const axios = require('axios');
const HttpError = require('../models/http-error');
const API_KEY = process.env.GEOCODE_API_KEY;

async function getCoordsForAddress(address) {
  const params = {
    auth: API_KEY,
    locate: address,
    json: '1',
  };

  try {
    const response = await axios.get('https://geocode.xyz', { params });
    const data = response.data;
    return { lat: data.latt, lng: data.longt };
  } catch (error) {
    throw new HttpError('Could not find location for the specified address', 422);
  }
}

module.exports = getCoordsForAddress;
