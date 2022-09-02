/* eslint-disable no-undef */

import React, { useEffect, useState } from 'react';
import { Button, Image, Col, Row } from 'react-bootstrap';
import { deleteMovie, getMovies, saveMovie } from '../../services/fakeMovieService';
import _Pagination from '../common/_Pagination';
import _ListGroup from '../common/_ListGroup';
import { getGenres } from '../../services/fakeGenreService';
import _MoviesTable from './_MoviesTable';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { LinkContainer } from 'react-router-bootstrap';
import _Like from '../common/_Like';

const Movies = () => {

  let location = useLocation();
  let navigate = useNavigate();


  const headers = [
    { _id: "img", title: "Img", content: (row) => <LinkContainer to={`/movies/${row._id}`} className='cur-pointer'><Image src={require(`/src/assets/img/${row._id}.jpg`)} height='100' /></LinkContainer> },
    { _id: "title", title: "Title" },
    { _id: "genre", title: "Genre", key: "genre.name" },
    { _id: "numberInStock", title: "Number In Stock" },
    { _id: "dailyRentalRate", title: "Daily Rental Rate" },
    { _id: "like", content: (row) => <_Like like={row.like} onClick={() => this.props.onLike(row)} /> },
    { _id: "delete", content: (row) => <Button variant='danger' onClick={() => this.props.onDelete(row._id)}> Delete </Button> }
  ];

  const [state, setState] = useState({
    dataLen: 1,
    pagesLen: 1,
  });

  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  const [page, setPage] = useState({
    pageNo: 1,
    genreID: 'all',
    sortCol: '',
    sortOrder: 'asc'
  });


  // componentDidMount
  useEffect(() => {

    let urlQuery = {};
    if (location.search == '') {
      urlQuery = page;
    } else {
      urlQuery = queryString.parse(location.search);
    }

    setPage({
      pageNo: parseInt(urlQuery.pageNo) || page.pageNo,
      genreID: urlQuery.genreID || page.genreID,
      sortCol: urlQuery.sortCol || page.sortCol,
      sortOrder: urlQuery.sortOrder || page.sortOrder
    });

  }, []);

  // componentDidUpdate
  useEffect(() => {

    const genres = [{ _id: 'all', name: 'All Genre' }, ...getGenres()];
    setGenres(genres);


    const { movies, dataLen, pagesLen } = getMovies(page.pageNo, page.genreID, page.sortCol, page.sortOrder);
    setMovies(movies);
    setState({ dataLen, pagesLen });

    navigateQuery();

  }, [page]);

  const navigateQuery = () => {
    navigate(queryString.stringifyUrl({ url: location.pathname, query: page }));
  };


  const handlePageLoad = (pageNo = page.pageNo) => {
    setPage({ ...page, pageNo });
  };

  const handleGenreSelect = (genreID = page.genreID) => {
    setPage({ ...page, genreID, pageNo: 1 });
  };

  const handleSort = (sort) => {
    setPage({ ...page, sortCol: sort.col, sortOrder: sort.order });
  };



  const handleDelete = (_id) => {
    deleteMovie(_id);
    handlePageLoad();
  };

  const handleLike = (movie) => {
    movie.like = !movie.like;
    saveMovie(movie);
    handlePageLoad();
  };





  return (
    <div className="Movies">
      <main className="container pt-3">

        <Row>
          <Col md='2'>
            <_ListGroup
              items={genres}
              selectedItemID={page.genreID}

              onItemSelect={handleGenreSelect}
            />
          </Col>

          <Col>
            <_MoviesTable
              movies={movies}
              headers={headers}
              dataLen={state.dataLen}
              sort={{ col: page.sortCol, order: page.sortOrder }}

              onLike={handleLike}
              onDelete={handleDelete}
              onSort={handleSort}
            />

            <_Pagination
              activeNo={page.pageNo}
              pagesLen={state.pagesLen}

              onChange={handlePageLoad}
            />

          </Col>
        </Row>

      </main>
    </div >
  );
};

export default Movies;
