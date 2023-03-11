import Card from './Card';
import style from './Cards.module.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyLoader from './Sceleton';

function Cards({ cardQuery, category }) {
  const [card, setCard] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://63f880885b0e4a127de76118.mockapi.io/coffee?${
        category > 0 ? `category=${category}` : ''
      }`
    )
      .then((res) => res.json())
      .then((datas) => setCard(datas))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [category]);

  if (error) {
    return <h1 className={style.error}>Что-то пошло не так.</h1>;
  }
  return (
    <div  className={style.cardsWrap}>
      {isLoading
        ? [...new Array(6)].map((card, i) => <MyLoader key={i} />)
        : card
            .filter((card) => card.name.toLowerCase().includes(cardQuery))
            .map((card) => (
              <Link key={card.id} to={`/ourCoffee/${card.id}`}>
                <Card {...card} />
              </Link>
            ))}
    </div>
  );
}

export default Cards;
