import React from 'react';
import css from './header.module.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className={css.wrapper}>
            <Link to="/">Главная страница</Link>
            <Link to="/responsible_employees">Ответственные сотрудники</Link>
            <Link to="/report_a_theft">Сообщить о краже</Link>
            <Link to="/all_thefts">Список краж</Link>
            <Link to="/authorization">Авторизация</Link>
            <Link to="/registration">Регистрация</Link>

        </nav>
    );
}

export default Header;