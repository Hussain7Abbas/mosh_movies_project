import React from 'react';
import propTypes from 'prop-types';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const _TableHeader = (props) => {

  const createSort = (col) => {
    let sort = { col };
    if (col == props.sort.col) {
      sort.order = props.sort.order == "desc" ? "asc" : "desc";
    } else {
      sort.order = "asc";
    }
    props.onSort(sort);
  };

  const renderSortIcon = (col) => {
    if (col._id !== props.sort.col) return;
    return props.sort.order == 'asc'
      ? <FontAwesomeIcon icon={faSortUp}></FontAwesomeIcon>
      : <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon>;
  };

  return (
    <thead>
      <tr>
        {props.cols.map(col => (
          <th className="cur-pointer" key={col._id} onClick={() => createSort(col._id)}>
            {col.title} {renderSortIcon(col)}
          </th>
        ))}
      </tr>
    </thead>
  );

};


_TableHeader.propTypes = {
  cols: propTypes.array.isRequired,
  sort: propTypes.object.isRequired,

  onSort: propTypes.func.isRequired
};


export default _TableHeader;
