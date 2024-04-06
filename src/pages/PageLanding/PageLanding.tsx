import React, { useEffect, useState } from 'react';
import './PageLanding.css';
import { useSearchParams, useNavigate } from 'react-router-dom'; // Menggunakan useLocation
import axios from 'axios';

function PageLanding() {
  const navigate = useNavigate();
  const [userExist, setUserExist] = useState(false);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  console.log(id);

  async function fetchUser(ids: string) {
    try {
      const response = await axios.get(`http://localhost:5000/api/user/${ids}`);

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
    if (id) {
      fetchUser(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
