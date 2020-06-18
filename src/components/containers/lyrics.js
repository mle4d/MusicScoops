import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getLyrics } from '../../services/musicAPI';
import Lyrics from '../lyrics/Lyrics';

export default class LyricContainer extends Component {
  static propTypes = {
    match: PropTypes.object,
  }

  state = {
    lyrics: ''
  }

  fetchLyrics = () => {
    return getLyrics(
      this.props.match.params.artist, 
      this.props.match.params.song)
      .then(({ lyrics }) => {
        this.setState({
          lyrics
        });
      })
      .catch(err => this.setState({
        error: err,
        loading: true
      }));
  }

  componentDidMount() {
    this.fetchLyrics();
  }

  render() {
    
    return (
      <div>
        <Lyrics title={this.props.match.params.song} lyrics={lyrics} artistName={this.props.match.params.artist} />
      </div>
    );
  }
}
