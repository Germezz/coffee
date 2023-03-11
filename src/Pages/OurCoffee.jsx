import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import AboutCoffee from '../components/AboutCoffee';
import style from './OutCoffee.module.scss';
import aboutImg from '../assets/image/aboutCoffee.png';
import Actions from '../components/Actions';
import Cards from '../components/Cards';

function OurCoffee() {
  const [search, setSearch] = useSearchParams();
  const [category, setCategory] = useState(-1);
  const cardQuery = search.get('card') || '';
  return (
    <>
      <section className={style.ourCoffee}>
        <h1 className={style.mainText}>Our Coffee</h1>
      </section>
      <AboutCoffee title={'About our beans'} image={aboutImg} />
      <Actions
        setSearch={setSearch}
        cardQuery={cardQuery}
        category={category}
        setCategory={setCategory}
      />
      <Cards cardQuery={cardQuery.toLowerCase()} category={category} />
    </>
  );
}

export default OurCoffee;
