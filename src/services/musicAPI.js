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
