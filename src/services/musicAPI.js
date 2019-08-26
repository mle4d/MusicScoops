const NUM_PER_PAGE = 10;
const getAllPages = count => Math.ceil(count / NUM_PER_PAGE);
const request = (url, page) => {
  const offset = (page - 1) * NUM_PER_PAGE;
  return fetch(`${url}$limit=${NUM_PER_PAGE}&offset=${offset}`)
    .then(res => {
      if(!res.ok) throw 'NOPE';

      return res.json();
    });
};
export const searchArtists = (artist, page) => {
  return fetch(`https://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25&offset=${(page - 1) * 10}`)
    .then(({ count, artists }) => { 
      const artist = artists.map(artist => ({
        id: artist.id,
        artist: artist.name
      }));
      return {
        artist, 
        allPages
      };
    });
};
export const getArtistReleases = (artist, page) => {
  return fetch(`https://musicbrainz.org/ws/2/release?artist=${artist}&fmt=json&limit=25&offset=${(page - 1) * 25}`)
    .then(res => {
      if(!res.ok) throw 'sorry try the google';

      return res.json();
    })
    .then((data) => {
      const allPages = data['release-count'];
      const albums = data.releases.map(album => ({
        releaseId: album.id,
        releaseTitle: album.title,
        coverArtCount: album['cover-art-archive'].front
      }));
      return {
        albums,
        allPages
      };
    });
};

export const getSongs = (release) => {
  return fetch(`https://musicbrainz.org/ws/2/recording?release=${release}&fmt=json`)
    .then(res => {
      if(!res.ok) throw res.status;

      return res.json();
    })
    .then(({ recordings }) => {
      const songs = recordings.map(song => ({
        songId: song.id,
        song: song.title
      }));
      return {
        songs
      };
    });
};

export const getLyrics = (artist, song) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
    .then(res => {
      if(!res.ok) throw 'no lyrics here';

      return res.json();
    })
    .then((data) => {
      const lyrics = data.lyrics;
      return {
        lyrics
      };
    });
};
