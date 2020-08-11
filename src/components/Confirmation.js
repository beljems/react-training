import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Button from './Button'

import './Confirmation.scss'

const Confirmation = ({ modifier, onClick }) => {
  return (
    <div className={`confirmation${modifier}`}>
      <Link className="close" onClick={onClick}>X</Link>
      <div>
        <p>Are you sure you want to leave the page?</p>
        <div className="confirmation-button">
          <Link to="/">YES</Link>
        </div>
      </div>
    </div>
  )
}

export default Confirmation;
