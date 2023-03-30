import React from 'react';
import css from './footer.module.css'

function Footer() {
    return (
        <div className={css.footer} >
            <span className={css.footerSpan}>Мегаважная информация</span>
        </div>
    );
}

export default Footer;