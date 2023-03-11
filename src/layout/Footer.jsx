import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../assets/image/Beans.svg'
import style from './Footer.module.scss';

function Footer() {
  return (
    <footer className={style.footer}>
      <div className="container">
        <nav className={style.navigate}>
          <ul className={style.menuWrap}>
            <li className={`${style.menuItem} `}>
              <NavLink to={'/'}>Coffee house</NavLink>
            </li>
            <li className={style.menuItem}>
              <NavLink to={'ourCoffee'}>Our coffee</NavLink>
            </li>
            <li className={style.menuItem}>
              <NavLink to={'pleasure'}>For your pleasure</NavLink>
            </li>
          </ul>
        </nav>
        <div className={style.img}>
        <img src={image} alt="beans" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
