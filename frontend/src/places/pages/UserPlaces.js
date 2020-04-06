import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Empire_State_Building_by_David_Shankbone.jpg/266px-Empire_State_Building_by_David_Shankbone.jpg',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: { lat: 40.7484405, lng: -73.9856644 },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Empire_State_Building_by_David_Shankbone.jpg/266px-Empire_State_Building_by_David_Shankbone.jpg',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: { lat: 40.7484405, lng: -73.9856644 },
    creator: 'u2',
  },
];

function UserPlaces() {
  const { userId } = useParams();
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
}

export default UserPlaces;
