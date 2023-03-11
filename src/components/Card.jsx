import React from 'react';
import style from '../components/Card.module.scss';

function Card({ image, name, price, country }) {
  return (
    <div className={style.wrap}>
      <div className={style.col}>
        <picture className={style.image}>
          <img src={image} />
        </picture>
        <h3 className={style.name}>{name}</h3>
        <p className={style.country}>{country}</p>
        <p className={style.price}>{price}$</p>
      </div>
    </div>
  );
}

export default Card;
