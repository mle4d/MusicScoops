import React, { Component } from 'react';
import { searchArtists } from '../../services/musicAPI';
import Search from '../search/search';
import Artists from '../artists/Artists';
//import Paging from '../../paging/Paging';
import PropTypes from 'prop-types';


class artistSearch extends Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object
  }

  state = {
    artistArray: [],
    artist: '',
    loading: false, 
    error: null, 
    page: 1,
    allPages: 1
  }

  inputChange = ({ target }) => {
    this.setState({ artist: target.value }, () => {
      this.props.history.push(`/?query=${this.state.artist}`);
    });
  }

  fetchArtists = () => {
    return searchArtists(this.state.artist, this.state.page) 
      .then(({ totalPages, artist }) => {
        this.setState({ 
          artistArray: artist, 
          loading: false,
          totalPages: Math.ceil(totalPages / 25)
        });
      })
      .catch(err => this.setState({ 
        error: err, 
        loading: true
      }));
  }

  onButtonClick = () => {
    this.setState({ loading: true, page: 1 });
    return this.fetchArtists();
  }

  changePageCount = (page) => {
    this.setState({ page }); 
    this.props.history.push(`/?query=${this.state.artist}&page=${page}`);
  }

  componentDidMount() {
    const searchArtist = new URLSearchParams(this.props.location.search);
    const queryArtist = searchArtist.get('query');
    const page = parseInt(searchArtist.get('page')) || 1;
    if(queryArtist) {
      this.setState({ artist: queryArtist, page }, () => {
        return this.fetchArtists();
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page) return this.fetchArtists();
  }

  render() {

    return (
    <>
      <Search artist={this.state.artist} input={this.changeInput} search={this.handleSearch} />
      <Artists artists={this.state.artists}/>
    </>
    );
  }
}
export default artistSearch;
