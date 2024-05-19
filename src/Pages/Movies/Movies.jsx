import { fetchSearchQuery } from 'components/Api';
import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import css from './Movies.css';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);

const actualQuery = searchParams.get('query');

const showFetchedSearchMovies = async query => {
    setLoading(true);
    try {
    const fetchedSearchQuery = await fetchSearchQuery(query);
    setMovies([...fetchedSearchQuery]);
    } catch (error) {
    console.log(error);
    } finally {
    setLoading(false);
    }
};

    useEffect(() => {
    setMovies([]);
    if (actualQuery) {
    showFetchedSearchMovies(actualQuery);
    }
}, [actualQuery]);

return (
    <>
    <SearchBar onSubmit={e => setSearchParams({ query: e })}></SearchBar>
    {loading && <div>Loading...</div>}
    {movies.length > 0 ? (
        <ul>
        {movies.map(movie => {
            return (
            <li key={movie.id}>
                <Link
                to={`${movie.id}`}
                state={{ from: `/movies/?${searchParams}` }}>
                {movie.title}
                </Link>
            </li>
            );
        })}
        </ul>
        ) : (
        actualQuery &&
        !loading && <div className={css.nothing}>Nothing found. Try again.</div>
    )}
    </>
);
};

export default Movies;