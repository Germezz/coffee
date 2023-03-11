import React from 'react';
import { useSearchParams } from 'react-router-dom';
import style from './Plesure.module.scss';
import AboutCoffee from '../components/AboutCoffee';
import aboutImg from '../assets/image/plesureUs.png';
import Cards from '../components/Cards';

function Plesure() {
  const [search, setSearch] = useSearchParams();
  const cardQuery = search.get('card') || '';
  return (
    <>
      <section className={style.ourCoffee}>
        <h1 className={style.mainText}>For your pleasure</h1>
      </section>
      <AboutCoffee title={'About our goods'} image={aboutImg} />
      <Cards cardQuery={cardQuery.toLowerCase()} />
    </>
  );
}

export default Plesure;
