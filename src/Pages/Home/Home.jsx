import { fetchTrendingMovies } from 'components/Api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.css';


const Home = () => {
const [trending, setTrending] = useState([]);

const seeTrending = async () => {
    try {
    const fetchedMovies = await fetchTrendingMovies();
    setTrending(fetchedMovies);
    } catch (error) {
    console.log(error);
    }
};

useEffect(() => {
    seeTrending();
}, []);

return (
    <>
    <h1 className={css.primary}>Trending today</h1>
    <ul>
        {trending.map(movie => {
        return (
            <li key={movie.id} className={css.list}>
            <Link to={`movies/${movie.id}`} state={{ from: '/' }}>
            {movie.title}
            </Link>
            </li>
        );
        })}
    </ul>
    </>
);
};

export default Home;