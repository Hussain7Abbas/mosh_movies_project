import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faHeart as regFaHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import React from 'react';


const _Like = probs => {

  return (
    <FontAwesomeIcon style={{ cursor: 'pointer' }} onClick={probs.onClick} icon={probs.like ? faHeart : regFaHeart} />
  );

};

export default _Like;