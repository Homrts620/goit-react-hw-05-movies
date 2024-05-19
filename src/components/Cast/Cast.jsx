import { fetchCastMovie } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.css';

const Cast = () => {
    const [cast,setCast] = useState();

    const showFetchedCastMovies = async id => {
        const fetchedCastMovie = await fetchCastMovie(id);
        setCast(fetchedCastMovie);
    };
    const { movieID } = useParams();

    useEffect(() => {
        showFetchedCastMovies(movieID);
    }, [movieID]);

    if (cast) {
        return (
            <div>
                <ul>
                    {cast.map(e => {
                        return (
                            <li key={e.id} className={css.item}>
                                <img
                                src={
                                e.profile_path
                                    ? `https://www.themoviedb.org/t/p/w138_and_h175_face/${e.profile_path}`
                                    : `https://via.placeholder.com/138x175?text=Theres+no+photo`
                                }
                                alt={e.name}
                                />
                                <div>
                                    <h3>Additional Information</h3>
                                    <p>Name: {e.name}</p>
                                    <p>Character: {e.character}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
};

export default Cast;