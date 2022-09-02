import React from 'react';

import { Table } from 'react-bootstrap';
import propTypes from 'prop-types';
import _TableHeader from '../common/_TableHeader';
import _TableBody from '../common/_TableBody';


const _MoviesTable = (props) => {
  return (
    props.dataLen == 0 ? <h1>No Movies</h1> :
      <>
        <h3>Number of Movies : {props.dataLen}</h3>
        <Table hover>
          <_TableHeader cols={props.headers} sort={props.sort} onSort={props.onSort} />
          <_TableBody rows={props.movies} cols={props.headers} />
        </Table>
      </>
  );
};


_MoviesTable.propTypes = {
  movies: propTypes.array.isRequired,
  headers: propTypes.array.isRequired,
  dataLen: propTypes.number.isRequired,
  sort: propTypes.object.isRequired,

  onLike: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
  onSort: propTypes.func.isRequired
};

export default _MoviesTable;