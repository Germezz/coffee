import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import style from './SingelePage.module.scss';
import img from '../assets/image/Beans.svg';
import { data } from '../data/data';

function SinglePage() {
  const { cof } = useParams();
  const [card, setCard] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(`https://63f880885b0e4a127de76118.mockapi.io/coffee/${cof}`)
      .then((res) => res.json())
      .then((data) => setCard(data))
      .catch((error) => setError(error));
  }, [cof]);
  if (error) {
    return (
      <div className={style.errorWrap}>
        <h1 className={style.error}>Что-то пошло не так.</h1>
      </div>
    );
  }
  return (
    <>
      <section className={style.ourCoffee}>
        <h1 className={style.mainText}>Our Coffee</h1>
      </section>
      <section className={style.about}>
        <div className="container">
          <div className={style.wrap}>
            <picture className={style.leftBlock}>
              <img src={card.image} alt="" />
            </picture>
            <div className={style.rightBlock}>
              <h2 className={style.headtext}>About it</h2>
              <picture>
                <img src={img} alt="" />
              </picture>
              <div className={style.wrapContent}>
                <h3 className={style.contentCountry}>
                  Country: {card.country}
                </h3>
                <p className={style.contentText}>
                  Description: Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Provident, animi. Ullam molestiae, nam at
                  eum ratione, autem natus velit voluptatem perferendis et
                  possimus facilis quibusdam, aliquam maxime eos a ut!
                </p>
                <p className={style.contentPrice}>
                  Price: <span>{card.price}$</span>{' '}
                </p>
                <button onClick={back} className={style.back}>
                  <GoArrowLeft className={style.arrowBack} />
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SinglePage;
