/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './PageLanding.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function PageLanding() {
  const { id } = useParams();
  const [userExist, setUserExist] = useState(false);
  const navigate = useNavigate();

  async function fetchUser() {
    try {
      const response = await axios.get(`http://localhost:5000/api/user/${id}`);

      console.log(response.data);

      if (response.data.data) {
        setUserExist(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function createUser() {
    try {
      const response = await axios.post('http://localhost:5000/api/user', {
        telegramId: id,
      });

      console.log(response.data);

      if (response.data.data) {
        setUserExist(true);
        navigate(`/home/${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="outer">
      <div className="wrapper">
        <div className="content">
          <h1>Welcome To Hart Bot</h1>
          <p>Temukan pengalaman baru Anda bersama kami</p>
          {userExist ? (
            <button className="button" onClick={() => navigate(`/home/${id}`)}>
              Continue
            </button>
          ) : (
            <button className="button" onClick={createUser}>
              Register
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageLanding;
