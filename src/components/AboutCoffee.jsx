import React from 'react';
import style from './AboutCoffee.module.scss';
import img from '../assets/image/Beans.svg';

function AboutCoffee({ image, title }) {
  return (
    <section className={style.aboutCoffee}>
      <div className="container">
        <div className={style.aboutCoffeeWrap}>
          <picture className={style.picture}>
            <img src={image} alt="l" />
          </picture>
          <div className={style.textWrap}>
            <h2 className={style.headtext}>{title}</h2>
            <picture>
              <img src={img} alt="" />
            </picture>
            <div className={style.wrap}>
              <p className={style.text}>
                Extremity sweetness difficult behaviour he of. On disposal of as
                landlord horrible.
              </p>
              <p className={style.text}>
                Afraid at highly months do things on at. Situation recommend
                objection do intention so questions. As greatly removed calling
                pleased improve an. Last ask him cold feel met spot shy want.
                Children me laughing we prospect answered followed. At it went
                is song that held help face.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCoffee;
