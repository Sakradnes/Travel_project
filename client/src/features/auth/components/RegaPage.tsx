import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { object, ref, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import { registration } from '../authSlice';
import { Rega } from '../type/authTypes';

const schema = object().shape({
  name: string().required('Необходимо указать имя'),
  email: string().required('Необходимо указать электронную почту'),
  password: string()
    .required('Необходимо указать пароль')
    .min(8, 'Пароль должен быть более 8 символов')
    .max(25, 'Пароль должен быть не более 25 символов'),
  cpassword: string()
    .required('Необходимо подтвердить пароль')
    .min(8, 'Пароль должен быть более 8 символов')
    .max(25, 'Пароль должен быть не более 25 символов')
    .oneOf([ref('password')], 'Пароли не совпадают'),
});

function RegaPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { error, user } = useSelector((store: RootState) => store.auth);
  const navigate = useNavigate();

  const [isNameFilled, setIsNameFilled] = useState(false);
  const [isEmailFilled, setIsEmailFilled] = useState(false);
  const [isPasswordFilled, setIsPasswordFilled] = useState(false);
  const [isCPasswordFilled, setIsCPasswordFilled] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Rega>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Rega> = async (data) => {
    const result = await dispatch(registration(data));

    if (result.payload?.error === 'Email is already registered') {
      setShowAlert(true);
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="flex flex-col items-center border border-black border-2 p-8 rounded"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Имя"
            {...register('name')}
            className="mb-2 p-2 border-black border-2 "
            onChange={(e) => setIsNameFilled(e.target.value.trim().length > 0)}
          />
          {isNameFilled && (
            <span className="absolute top-0 right-0 mt-2 mr-2 text-black">✔</span>
          )}
        </div>
        <span>{errors.name?.message}</span>

        <div className="relative">
          <input
            type="email"
            placeholder="Электронная почта"
            {...register('email')}
            className="mb-2 p-2 border border-black border-2"
            onChange={(e) => setIsEmailFilled(e.target.value.trim().length > 0)}
          />
          {isEmailFilled && (
            <span className="absolute top-0 right-0 mt-2 mr-2 text-black">✔</span>
          )}
        </div>
        <span>{errors.email?.message}</span>

        <div className="relative">
          <input
            type="password"
            placeholder="Пароль"
            {...register('password')}
            className="mb-2 p-2 border border-black border-2"
            onChange={(e) => setIsPasswordFilled(e.target.value.trim().length > 0)}
          />
          {isPasswordFilled && (
            <span className="absolute top-0 right-0 mt-2 mr-2 text-black">✔</span>
          )}
        </div>
        <span>{errors.password?.message}</span>

        <div className="relative">
          <input
            type="password"
            placeholder="Подтверждение пароля"
            {...register('cpassword')}
            className="mb-2 p-2 border border-black border-2"
            onChange={(e) => setIsCPasswordFilled(e.target.value.trim().length > 0)}
          />
          {isCPasswordFilled && (
            <span className="absolute top-0 right-0 mt-2 mr-2 text-black">✔</span>
          )}
        </div>
        <span>{errors.cpassword?.message}</span>

        <button type="submit" className="bg-black text-white p-2 rounded">
          Зарегистрироваться
        </button>
      </form>

      {showAlert && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded border border-red-500">
          <p className="text-red-500">Такая почта уже зарегистрирована</p>
          <button
            onClick={() => setShowAlert(false)}
            className="bg-red-500 text-white p-2 mt-4 rounded"
          >
            Закрыть
          </button>
        </div>
      )}

      <div>{error}</div>
    </div>
  );
}

export default RegaPage;
