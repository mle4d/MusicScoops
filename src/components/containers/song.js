import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Songs from '../songs/Songs';
import { getSongs } from '../../services/musicAPI';

export default class SongContainer extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  state = {
    songsArray: [],
  }

  fetchSongs = () => {
    return getSongs(this.props.match.params.releaseId)
      .then(({ songs }) => {
        this.setState({
          songsArray: songs,
        });
      })
      .catch(err => this.setState({
        error: err,
        loading: true
      }));
  }

  componentDidMount() {
    this.fetchSongs();
  }

  render() {
    const { songsArray } = this.state;
    return (
      <>
        <h2>Songs from {this.props.match.params.releaseTitle}</h2>
        <Songs artist={this.props.match.params.artist} songsArray={songsArray} />
      </>
    );
  }
}
