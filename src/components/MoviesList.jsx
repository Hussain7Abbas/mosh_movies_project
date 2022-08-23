/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Button, Col, Image, Row, Table } from 'react-bootstrap';
import { deleteMovie, getMovies, saveMovie } from '../services/fakeMovieService';
import _Like from './common/_Like';
import _Pagination from './common/_Pagination';
import _ListGroup from './common/_ListGroup';
import { getGenres } from '../services/fakeGenreService';


class MoviesList extends Component {

  state = {
    pageNo: 1,
    len: 1,
    pagesLen: 1,
    movies: [],
    genres: [],
    genre: { _id: 'all', name: 'All Genre' }
  };

  componentDidMount = () => {
    const genres = [{ _id: 'all', name: 'All Genre' }, ...getGenres()];
    this.setState({ genres });
    this.handleGenreSelect();
  };

  handleGenreSelect = (genre = this.state.genre) => {
    this.setState({ genre });
    this.handlePageLoad(1, genre);
  };

  handlePageLoad = (pageNo = this.state.pageNo, genre = this.state.genre) => {
    const { movies, len, pagesLen } = getMovies(pageNo, undefined, genre);
    this.setState({ pageNo, movies, len, pagesLen });
  };



  deleteMovie = (_id) => {
    deleteMovie(_id);
    this.handlePageLoad();
  };

  handleLike = (_movie) => {
    _movie.like = !_movie.like;
    saveMovie(_movie);
    this.handlePageLoad();
  };


  render() {
    return (
      <div className="MoviesList" style={{ marginTop: '56px' }}>
        <main className="container pt-3">

          <Row>
            <Col sm='2'>
              <_ListGroup items={this.state.genres} selectedItem={this.state.genre} onItemSelect={this.handleGenreSelect} />
            </Col>

            <Col>
              {
                this.state.len == 0 ? <h1>No Movies</h1> :
                  <>
                    <h3>Number of Movies : {this.state.len}</h3>
                    <Table hover>
                      <thead>
                        <tr>
                          <th>Img</th>
                          <th>Title</th>
                          <th>Genre</th>
                          <th>Number In Stock</th>
                          <th>Daily Rental Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.movies.map(m => {
                            return (
                              <tr key={m._id}>
                                <td>
                                  <Image src={require(`/src/assets/img/${m._id}.jpg`)} height='100'></Image>
                                </td>
                                <td>{m.title}</td>
                                <td>{m.genre.name}</td>
                                <td>{m.numberInStock}</td>
                                <td>{m.dailyRentalRate}</td>
                                <td>
                                  <_Like like={m.like} onClick={() => { this.handleLike(m); }} />
                                </td>

                                <td>
                                  <Button variant='danger' onClick={() => { this.deleteMovie(m._id); }}> Delete </Button>
                                </td>
                              </tr>
                            );
                          })
                        }
                      </tbody>
                    </Table>
                  </>
              }
              <_Pagination activeNo={this.state.pageNo} pagesLen={this.state.pagesLen} onChange={this.handlePageLoad} />
            </Col>
          </Row>

        </main>
      </div >
    );
  }
}

export default MoviesList;
