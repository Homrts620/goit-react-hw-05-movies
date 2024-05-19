import { fetchDetailsMovie } from 'components/Api';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.css';

const MovieDetails = () => {
    const [movie, setMovie] = useState();
    let location = useLocation();
    const backLinkHref = location.state?.from ?? '/';

    const showFetchedDetailsMovie = async id => {
        try {
        const fetchedDetailsMovie = await fetchDetailsMovie(id);
        setMovie(fetchedDetailsMovie);
        } catch (error) {
        console.log(error);
        }
    };

const { movieId } = useParams();

useEffect(() => {
    showFetchedDetailsMovie(movieId);
}, [movieId]);

if (movie) {
    return (
    <>
        <div className={css.container}>
        <div>
            <Link to={backLinkHref} className={css.link}>
            <button type="button" className={css['back-button']}>
                ← GO BACK
            </button>
            </Link>
            <img
            src={
                movie.poster_path
                ? `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`
                : `https://via.placeholder.com/220x330?text=Theres+no+photo`
            }
            alt={`${movie.title}`}
            />
        </div>
        <div className={css.details}>
            <h2>{movie.title}</h2>
            <span>User score: {Math.round(movie.vote_average * 10)}%</span>
            <h3>Overview</h3>
            <p>{movie.overview ? movie.overview : "There's no overview"}</p>
            <h3>Generes</h3>
            <p>
            {movie.genres &&
                movie.genres.map(e => {
                return `${e.name} `;
                })}
            </p>
        </div>
        </div>
        <div className={css.additional}>
        Additional information:
        <ul>
            <li>
            <Link to="cast" state={{ from: `${backLinkHref}` }}>
                Cast
            </Link>
            </li>
            <li>
            <Link to="reviews" state={{ from: `${backLinkHref}` }}>
                Reviews
            </Link>
            </li>
        </ul>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet></Outlet>
        </Suspense>
    </>
    );
}
};


export default MovieDetails;