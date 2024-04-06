/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './PageHome.css';
import Button from '../../Components/Button/Button';
import Coin from '../../assets/coin.png';
import { TbCoinFilled } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import axios from 'axios';

//@ts-ignore
const telegram = window.Telegram.WebApp;

function PageHome() {
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  async function fetchUser() {
    try {
      const response = await axios.get(`http://localhost:5000/api/user/${id}`);

      console.log(response.data);

      if (response.data.data) {
        setCount(response.data.data.coin);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function updateUser(updatedCount: number) {
    setDisabled(true);
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/user/${id}`,
        {
          coin: updatedCount,
        }
      );

      if (response.data.data) {
        setDisabled(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleAdd() {
    // Tambahkan koin secara lokal
    const updatedCount = count + 1;
    setCount(updatedCount);

    // Panggil fungsi untuk memperbarui data di database
    await updateUser(updatedCount);
  }

  useEffect(() => {
    telegram.ready();
    fetchUser();
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
          <Button
            type="add"
            title="Add"
            onClick={handleAdd}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
}

export default PageHome;
