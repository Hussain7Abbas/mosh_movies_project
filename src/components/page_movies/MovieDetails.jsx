
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  let params = useParams();

  let navigate = useNavigate();
  const submitForm = () => {
    navigate('/movies');
  };
  return (
    <>
      < h1 > Movie Details {params.id}</h1 >
      <Button onClick={submitForm} variant='primary'>Submit</Button>
    </>
  );
};

export default MovieDetails;

