import React from 'react';
import css from './header.module.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className={css.wrapper}>
            <Link to="/">Главная страница</Link>
            <Link to="/responsible_employees">Ответственные сотрудники</Link>
            <Link to="/responsible_employees">Сообщить о краже</Link>
            <Link to="/all_thefts">Список краж</Link>
            <Link to="/registration">Авторизация</Link>
            <Link to="/responsible_employees">Регистрация</Link>

        </nav>
    );
}

export default Header;