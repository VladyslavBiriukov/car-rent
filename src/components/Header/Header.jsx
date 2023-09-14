import React from "react";
import { Link, NavLink} from "react-router-dom";
import style from './Header.module.scss';
import logoPage from '../../images/logo/logo.png';

export const Header = () => {
    return (
        <header className={style.header}>
            <Link to="/">
                <img src={logoPage} alt="logo image" width="150" />
            </Link>
            <nav className={style.navigationContainer}>
                <NavLink className={style.navigationLink} to="/">Home</NavLink>
                <NavLink className={style.navigationLink} to="/catalog">Catalog</NavLink>
                <NavLink className={style.navigationLink} to="favorites">Favorites</NavLink>
            </nav>
        </header>
    );
};