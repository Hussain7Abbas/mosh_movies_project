import React from 'react';
import { ListGroup } from 'react-bootstrap';
import propTypes from 'prop-types';

const _ListGroup = ({ items, selectedItemID, onItemSelect, idProperty, textProperty }) => {
  return (
    <ListGroup>
      {
        items.map(item => {
          return (

            < ListGroup.Item
              className="cur-pointer"
              onClick={() => onItemSelect(item[idProperty])}
              key={item[idProperty]}
              active={selectedItemID === item[idProperty]}>
              {item[textProperty]}
            </ListGroup.Item>
          );
        })
      }
    </ListGroup >
  );
};

_ListGroup.defaultProps = {
  selectedItemID: 'all',
  idProperty: '_id',
  textProperty: 'name'
};

_ListGroup.propTypes = {
  onItemSelect: propTypes.func.isRequired,
  selectedItemID: propTypes.string.isRequired,
  items: propTypes.array.isRequired,
  idProperty: propTypes.string,
  textProperty: propTypes.string
};

export default _ListGroup;