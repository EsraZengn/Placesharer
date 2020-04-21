import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useHttpClient } from '../../shared/hooks/http-hook';
import useForm from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import Card from '../../shared/components/UIElements/Card';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import './PlaceForm.css';

function UpdatePlace() {
  const auth = useContext(AuthContext);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [place, setPlace] = useState();
  const { placeId } = useParams();
  const history = useHistory();

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: { value: '', isValid: false },
      description: { value: '', isValid: false },
    },
    true,
  );

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const responseData = await sendRequest(`http://localhost:5000/api/places/${placeId}`);
        setPlace(responseData.place);
        setFormData(
          {
            title: { value: responseData.place.title, isValid: true },
            description: { value: responseData.place.description, isValid: true },
          },
          true,
        );
      } catch (error) {}
    };
    fetchPlace();
  }, [placeId, sendRequest, setFormData]);

  const placeUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    try {
      await sendRequest(
        `http://localhost:5000/api/places/${placeId}`,
        'PATCH',
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
        }),
        {
          'Content-Type': 'application/json',
        },
      );
      history.push(`/${auth.userId}/places`);
    } catch (error) {}
  };

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!place && !error) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && place && (
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            initialValue={place.title}
            initialValid={true}
          />
          <Input
            id="description"
            element="textArea"
            type="text"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (min. 5 characters)."
            onInput={inputHandler}
            initialValue={place.description}
            initialValid={true}
          />
          <Button type="submit" disabled={!formState.isValid}>
            UPDATE PLACE
          </Button>
        </form>
      )}
    </>
  );
}

export default UpdatePlace;
