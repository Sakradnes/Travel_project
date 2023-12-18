import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RootState, useAppDispatch } from '../store/store';
import { type Location } from '../features/travel/type/typestravel';
import { currentLoc } from '../features/travel/travelSlice';
import { useSelector } from 'react-redux';

export default function Header(): JSX.Element {
  const [city, setCity] = useState(1);
  const user = useSelector((store: RootState) => store.auth.user);

  const locantions: Location[] = [
    { id: 1, name: 'Санкт-Петербруг' },
    {
      id: 2,
      name: 'Москва',
    },
  ];
  const dispatch = useAppDispatch();

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
            {locantions.map((locantion) => {
              return (
                <option key={locantion.id} value={locantion.id}>
                  {locantion.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <Link to="/profile"> Profile </Link>
          <h1>Мартшруты</h1>
        </div>
        <div>
          <h1>Блог</h1>
        </div>
        <div className="flex ">
          {user ? (
            <>
              <div>
                <h1>Мой профиль</h1>
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
