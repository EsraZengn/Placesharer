import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';
import { useHttpClient } from '../../shared/hooks/http-hook';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

function UserPlaces() {
  const [places, setPlaces] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { userId } = useParams();

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/places/user/${userId}`,
        );
        setPlaces(responseData.places);
      } catch (error) {}
    };
    getPlaces();
  }, [sendRequest, userId]);

  const deletedPlaceHandler = (deletePlaceId) => {
    setPlaces((prevPlaces) => prevPlaces.filter((place) => place.id !== deletePlaceId));
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && places && <PlaceList items={places} onDeletePlace={deletedPlaceHandler} />}
    </>
  );
}

export default UserPlaces;
