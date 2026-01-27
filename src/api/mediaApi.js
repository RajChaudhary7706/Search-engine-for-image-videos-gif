import axios from 'axios';

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_API_KEY;

export async function fetchPhotos(query, page = 1, per_page = 20) {

  if (!query || query.trim() === '') {
    return []
  }

  const res = await axios.get(
    'https://api.unsplash.com/search/photos',
    {
      params: { query, page, per_page },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_KEY}`,
      },
    }
  );

  console.log(res.data);
  return res.data.results;
}

export async function fetchVideos(query, per_page = 20) {
    if(!query || query.trim() === ''){
        return []
    }
  const res = await axios.get(
    'https://api.pexels.com/videos/search',
    {
      params: { query, per_page },
      headers: {
        Authorization: PEXELS_KEY,
      },
    }
  );

  console.log(res.data);
  return res.data.videos;
}

export async function fetchGif(query) {
    if(!query || query.trim() === ''){
        return []
    }
  const res = await axios.get(
    "https://api.giphy.com/v1/gifs/search",
    {
      params: {
        api_key: GIPHY_KEY,
        q: query,
        limit: 20,
      },
    }
  );
  console.log(res.data);
  return res.data.data;
}


