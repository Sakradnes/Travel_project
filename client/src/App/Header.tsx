import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { type RootState, useAppDispatch } from '../store/store';
import { currentLoc } from '../features/location/locationSlice';
import { loadLocations } from '../features/location/locationSlice';
import { logout } from '../features/auth/authSlice';

export default function Header(): JSX.Element {
  const [city, setCity] = useState(1);

  const navigate = useNavigate();
  const { user, isLoggedIn } = useSelector((store: RootState) => store.auth);
  const locations = useSelector((store: RootState) => store.location.locations);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadLocations());
  }, []);

  useEffect(() => {
    if (localStorage.getItem('cityId')) {
      const item = localStorage.getItem('cityId');
      setCity(+item!);
      dispatch(currentLoc(city));
    }
  }, [city]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    localStorage.setItem('cityId', e.target.value);
    setCity(+e.target.value);
  };
  const handleLogout: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className=" header">
      <div className="flex justify-between items-center container">
        <Link to="/">
          <div>
            <img src="/logo.png" style={{ height: 50 }}></img>
          </div>
        </Link>
        <div>
          <label htmlFor="location">Выберите локацию:</label>
          <select onChange={handleSelect} value={city}>
            {locations.map((locantion) => {
              return (
                <option key={locantion.id} value={locantion.id}>
                  {locantion.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <div className="route">
            <Link to="/routes">
              <h1>Мартшруты путешествий</h1>
            </Link>
          </div>
        </div>
        <div className="blog-container">
          <Link to="/blog">
            <div className="blog-list">
              <h4>Блог</h4>
            </div>
          </Link>
        </div>
        <div className="flex ">
          {user && isLoggedIn ? (
            <>
              <div className="dropdown">
                <button className="dropbtn" type="button">
                  Мой профиль
                </button>
                <div className="dropdown-content">
                  <Link to="/profile">
                    <h1> Мой профиль</h1>
                  </Link>
                  <button type="button" onClick={handleLogout}>
                    <h1>Выйти</h1>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/registration">
                <div className="pr-5">
                  <h1>Регистрация</h1>
                </div>
              </Link>
              <Link to="/login">
                <div>
                  <h1>Войти</h1>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
