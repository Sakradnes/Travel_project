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
    <nav className="bg-black text-white">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <div>
            <img src="/logo.png" style={{ height: 50 }} alt="Logo" />
          </div>
        </Link>
        <div>
          <label htmlFor="location" className="mr-2">
            Выберите локацию:
          </label>
          <select onChange={handleSelect} value={city} className="bg-black text-white p-1 rounded">
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}

          </select>
        </div>
        <div className="route">
          <Link to="/routes">
            <h1 className="text-xl">Маршруты путешествий</h1>
          </Link>
        </div>
        <div className="blog-container">
          <Link to="/blog">
            <div className="blog-list">
              <h4>Блог</h4>
            </div>
          </Link>
        </div>
        <div className="flex">
          {user && isLoggedIn ? (
            <div className="dropdown relative">
              <button className="dropbtn">Мой профиль</button>
              <div className="dropdown-content absolute hidden bg-white text-black">
                <Link to="/profile" className="block p-2 hover:bg-gray-200">
                  Мой профиль
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="block p-2 hover:bg-gray-200"
                >
                  Выйти
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link to="/registration" className="pr-5">
                <h1>Регистрация</h1>
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
