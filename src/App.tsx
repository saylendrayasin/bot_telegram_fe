import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Coin from './Assets/coin.png';
import { TbCoinFilled } from 'react-icons/tb';

//@ts-ignore
const telegram = window.Telegram.WebApp;

function App() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  useEffect(() => {
    telegram.ready();
    console.log('Telegram ready', telegram);
  }, []);

  return (
    <div className="outer">
      <div className="wrapper">
        <div className="content">
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

export default App;
