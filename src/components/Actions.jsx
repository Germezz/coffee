import React, { useEffect, useState } from 'react';
import style from './Actions.module.scss';

function Actions({ setSearch, cardQuery, setCategory, category }) {
  const [searching, setSearching] = useState(cardQuery);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.search.value;
    setSearch({ card: query });
  };
  console.log(category);
  return (
    <>
      <div className="container">
        <div className={style.actionWrap}>
          <form onSubmit={handleSubmit}>
            <label className={style.label}>
              Looking for
              <input
                type="search"
                placeholder="start typing here..."
                className={style.search}
                name="search"
                value={searching}
                onChange={(e) => setSearching(e.target.value)}
              />
            </label>
          </form>
          <div className={style.filter}>
            <h3 className={style.label}>Or filter</h3>
            <div className={style.filterWrap}>
              <button
                className={`${style.filterbtn} ${
                  category < 0 ? `${style.active}` : ''
                }`}
                onClick={() => setCategory('-1')}
              >
                All
              </button>
              <button
                className={`${style.filterbtn} ${
                  category === '1' ? `${style.active}` : ''
                }`}
                onClick={() => setCategory('1')}
              >
                Brazil
              </button>
              <button
                className={`${style.filterbtn} ${
                  category === '2' ? `${style.active}` : ''
                }`}
                onClick={() => setCategory('2')}
              >
                Kenya
              </button>
              <button
                className={`${style.filterbtn} ${
                  category === '3' ? `${style.active}` : ''
                }`}
                onClick={() => setCategory('3')}
              >
                Columbia
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Actions;
