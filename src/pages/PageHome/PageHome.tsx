import React, { useState, useEffect } from 'react';
import './PageHome.css';
import Button from '../../Components/Button/Button';
import Coin from '../../assets/coin.png';
import { TbCoinFilled } from 'react-icons/tb';
import { useParams } from 'react-router-dom';

//@ts-ignore
const telegram = window.Telegram.WebApp;

function PageHome() {
  const { id } = useParams();
  const [count, setCount] = useState(0);

  console.log('ID', id);

  function handleAdd() {
    setCount(count + 1);
  }

  useEffect(() => {
    telegram.ready();
    console.log('Telegram ready', telegram);
  }, []);

  return (
    <div className="outer-home">
      <div className="wrapper-home">
        <div className="content-home">
          <div className="coin__count">
            <TbCoinFilled className="cc__icon" />
            <p className="cc__text">{count}</p>
          </div>
          <img className="coin" src={Coin} alt="Coin" />
          <Button type="add" title="Add" onClick={handleAdd} />
        </div>
      </div>
    </div>
  );
}

export default PageHome;
