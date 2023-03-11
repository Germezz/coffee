import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <div className="container">
        <nav>
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
      </div>
    </header>
  );
}

export default Header;
