import React from 'react';
import { ListGroup } from 'react-bootstrap';
import propTypes from 'prop-types';

const _ListGroup = ({ items, selectedItem, onItemSelect, idProperty, textProperty }) => {
  return (
    <ListGroup>
      {
        items.map(item => {
          return (
            < ListGroup.Item
              className="cur-pointer"
              onClick={() => onItemSelect(item)}
              key={item[idProperty]}
              active={selectedItem[idProperty] === item[idProperty]}>
              {item[textProperty]}
            </ListGroup.Item>
          );
        })
      }
    </ListGroup >
  );
};

_ListGroup.defaultProps = {
  selectedItem: { _id: 'all', name: 'All Genres' },
  idProperty: '_id',
  textProperty: 'name'
};

_ListGroup.propTypes = {
  onItemSelect: propTypes.func.isRequired,
  selectedItem: propTypes.object.isRequired,
  items: propTypes.array.isRequired,
  idProperty: propTypes.string,
  textProperty: propTypes.string
};

export default _ListGroup;