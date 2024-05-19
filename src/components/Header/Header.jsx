import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Header.css';

const Header = () => {
    return (
        <div>
            <header className={css.primary}>
                <nav className={css.nav}>
                    <NavLink className={css.link} to="/">
                        Home
                    </NavLink>
                    <NavLink className={css['link.padding']} to="/movies">
                        Movies
                    </NavLink>
                </nav>
            </header>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet></Outlet>
            </Suspense>
        </div>
    );
};

export default Header;