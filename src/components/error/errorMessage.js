import React from 'react';
import img from './error.jpg';
import './errorMessage'

const ErrorMessage = () => {
  return (
    <>
      <img src={img} alt='error'></img>
      <span>Something goes wrong :(</span>
    </>
  )
}
export default ErrorMessage;