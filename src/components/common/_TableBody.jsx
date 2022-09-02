/* eslint-disable no-undef */
import React from 'react';
import propTypes from 'prop-types';
import _ from 'lodash';


const _TableBody = (props) => {

  const generateRow = (row, col) => {
    return (
      <td key={row._id + col._id}>
        {
          col.content == undefined
            ? _.get(row, col.key || col._id)
            : col.content(row)
        }
      </td>
    );
  };

  return (
    <tbody>
      {
        props.rows.map(row => {
          return (
            <tr key={row._id}>
              {
                props.cols.map(col => generateRow(row, col))
              }
            </tr>
          );
        })
      }
    </tbody>
  );
};


_TableBody.propTypes = {
  rows: propTypes.array.isRequired,
  cols: propTypes.array.isRequired
};

export default _TableBody;