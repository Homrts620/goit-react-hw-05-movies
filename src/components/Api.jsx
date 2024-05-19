import axios from 'axios';

const APIKEY = '740b7423b494b8302a1c536f8cf876a4';

export const fetchTrendingMovies = async () => {
    const target = `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}`;
    const response = await axios.get(target);

return response.data.results;
};

export const fetchSearchQuery = async query => {
    const target = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}&include_adult=false&language=en-US&page=1`;
    const response = await axios.get(target);

return response.data.results;
};

export const fetchDetailsMovie = async id => {
    const target = `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`;
    const response = await axios.get(target);

return response.data;
};


export const fetchCastMovie = async id => {
    const target = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language=en-US`;

    const response = await axios.get(target);
return response.data.cast;
};

export const fetchReviewsMovie = async id => {
    const target = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${APIKEY}&language=en-US&page=1`;
    const response = await axios.get(target);

return response.data.results;
};
const Api = {
    fetchTrendingMovies,
    fetchSearchQuery,
    fetchDetailsMovie,
    fetchCastMovie,
    fetchReviewsMovie,
};

export default Api;