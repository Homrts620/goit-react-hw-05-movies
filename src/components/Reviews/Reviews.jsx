import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsMovie } from '../Api';
import css from './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState();

    const fetchedThisMovieReviews = async id => {
        const fetchedData = await fetchReviewsMovie(id);
        setReviews(fetchedData);
    };

    const { movieId } = useParams();

    useEffect(() => {
        fetchedThisMovieReviews(movieId);
    }, [movieId]);

    if (reviews) {
        return (
            <ul>
        {!reviews[0] ? 'We dont have any reviews for this movie.' : ''}
        {reviews.map(e => {
        return (
            <li key={e.id} className={css.item}>
            <p className={css.author}>Author: {e.author}</p>
            <p>{e.content}</p>
            </li>
        );
        })}
    </ul>
        );
    }
};

export default Reviews;