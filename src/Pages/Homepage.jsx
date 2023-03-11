import React from 'react';
import style from './Homepag.module.scss';
import beans from '../assets/image/BeansWhite.svg';
import beansBlack from '../assets/image/Beans.svg';
import Card from '../components/Card';
import { best } from '../data/data';


function Homepage() {
  return (
    <>
      <section className={style.main}>
        <div className="container">
          <h1 className={style.headtext}>Everything You Love About Coffee</h1>
          <picture className={style.picture}>
            <img src={beans} alt="beans" />
          </picture>
          <h2 className={style.subtext}>
            We makes every day full of energy and taste
          </h2>
          <h2 className={style.subtext}>Want to try our beans?</h2>
          <a href="#" className={style.button}>
            More
          </a>
        </div>
      </section>
      <section className={style.about}>
        <div className="container">
          <h2 className={style.sectionName}>About Us</h2>
          <picture className={style.picture}>
            <img src={beansBlack} alt="beans" />
          </picture>
          <div className={style.textWrap}>
            <p className={style.aboutText}>
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. Afraid at highly months do things on at.
              Situation recommend objection do intention so questions. As
              greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.
            </p>
            <p className={style.aboutText}>
              Now residence dashwoods she excellent you. Shade being under his
              bed her, Much read on as draw. Blessing for ignorant exercise any
              yourself unpacked. Pleasant horrible but confined day end
              marriage. Eagerness furniture set preserved far recommend. Did
              even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </p>
          </div>
        </div>
      </section>
      <section className={style.best}>
        <div className="container">
          <h2 className={style.sectionName}>Our best</h2>
          <div className={style.wrap}>
            {best.map((card) => <Card key={card.id} {...card}/>)}
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
