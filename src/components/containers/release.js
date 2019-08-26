import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getReleases } from '../../services/musicAPI';
import Releases from '../releases/Releases';
// import Paging from '../../paging/Paging';


export default class ReleaseContainer extends Component {
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    location: PropTypes.object,
  }

  state = {
    releaseArray: [],
    loading: true,
    page: 1,
    allPages: 1,
    error: null,
  }

  fetchReleases = () => {
    return getReleases(this.props.match.params.Id, this.state.page)
      .then(({ allPages, albums }) => {
        this.setState({
          releaseArray: albums,
          loading: false,
          allPages: Math.ceil(allPages / 25)
        });
      })
      .catch(err => this.setState({
        error: err,
        loading: true
      }));
  }

  changePageCount = (page) => {
    this.setState({ page }); 
    this.props.history.push(`/releases/${this.state.artist}/${this.props.match.params.artistId}?page=${page}`); 
  }

  componentDidMount() {
    this.fetchReleases();
    const pageSearch = new URLSearchParams(this.props.location.search);
    const page = parseInt(pageSearch.get('page')) || 1;
    if(pageSearch) {
      this.setState({ page });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page) return this.fetchReleases();
  }

  render() {
    return (
       <>
        <h2>Releases for {this.props.match.params.artist}</h2>
        <Releases artistName={this.props.match.params.artist} releaseArray={releaseArray} />
        </>
    );

  }
}
