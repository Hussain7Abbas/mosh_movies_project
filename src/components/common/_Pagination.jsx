/* eslint-disable react/prop-types */
import Pagination from 'react-bootstrap/Pagination';
import React from 'react';
import propTypes from 'prop-types';
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const _Pagination = ({ activeNo, pagesLen, onChange }) => {

  if (pagesLen <= 1) return null;


  // ## ════════════════════╣  SECTION Create Pages Array  ╠════════════════════ ##

  let isFirstLast = false;
  let nums = [];
  if (pagesLen > 3) {
    isFirstLast = true;
    if (activeNo === 1) {
      nums = [1, 2, 3];
    } else if (activeNo === pagesLen) {
      nums = [activeNo - 2, activeNo - 1, activeNo];
    } else {
      nums = [activeNo - 1, activeNo, activeNo + 1];
    }
  } else {
    for (let num = 1; num <= pagesLen; num++) {
      nums.push(num);
    }
  }

  //    ════════════════════╣ !SECTION Create Pages Array  ╠════════════════════ ##


  // ## ════════════════════╣  SECTION Create Pages DOM  ╠════════════════════ ##

  const items = [];
  nums.map(num => {
    items.push(
      <Pagination.Item onClick={() => onChange(num)} key={num} active={num === activeNo}>
        {num}
      </Pagination.Item>
    );
  });

  items.unshift(
    <Pagination.Prev onClick={() => onChange(activeNo === 1 ? 1 : activeNo - 1)} key={'prev'}>
      {<FontAwesomeIcon icon={faAngleLeft} />}
    </Pagination.Prev>
  );
  items.push(
    <Pagination.Next onClick={() => onChange(activeNo === pagesLen ? pagesLen : activeNo + 1)} key={'next'}>
      {<FontAwesomeIcon icon={faAngleRight} />}
    </Pagination.Next>
  );

  if (isFirstLast) {
    items.unshift(
      <Pagination.First onClick={() => onChange(1)} key={'first'}>
        {<FontAwesomeIcon icon={faAnglesLeft} />}
      </Pagination.First>
    );
    items.push(
      <Pagination.Last onClick={() => onChange(pagesLen)} key={'last'}>
        {<FontAwesomeIcon icon={faAnglesRight} />}
      </Pagination.Last>
    );
  }

  //    ════════════════════╣ !SECTION Create Pages DOM  ╠════════════════════ ##


  return (
    <Pagination>
      {items}
    </Pagination>
  );
};

_Pagination.propTypes = {
  activeNo: propTypes.number.isRequired,
  pagesLen: propTypes.number.isRequired,
  onChange: propTypes.func.isRequired,
};

export default _Pagination;