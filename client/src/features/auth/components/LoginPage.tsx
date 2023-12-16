import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import type { Login } from '../type/authTypes';
import { login } from '../authSlice';

const schema = object().shape({
  email: string().required('Необходимо указать электронную почту'),
  password: string()
    .required('Необходимо указать пароль')
    .min(8, 'Пароль должен быть более 8 символов')
    .max(25, 'Пароль должен быть не более 25 символов'),
});

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { error, user } = useSelector((store: RootState) => store.auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Login> = (data) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="email" {...register('email')} />
        <span>{errors.email?.message}</span>
        <input type="password" placeholder="password" {...register('password')} />
        <span>{errors.password?.message}</span>
        <button type="submit">Войти</button>
      </form>
      <div>{error}</div>
    </div>
  );
}

export default LoginPage;
