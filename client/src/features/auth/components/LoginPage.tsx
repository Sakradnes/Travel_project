import React, { useEffect, useState } from 'react';
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

  const [isEmailFilled, setIsEmailFilled] = useState(false);
  const [isPasswordFilled, setIsPasswordFilled] = useState(false);

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
    <div className="flex justify-center items-center h-screen">
      <form
        className="flex flex-col items-center border border-black border-2 p-8 rounded"
        onSubmit={handleSubmit(onSubmit)}
      >
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
            onChange={(e) =>
              setIsPasswordFilled(e.target.value.trim().length >= 8)
            }
          />
          {isPasswordFilled && (
            <span className="absolute top-0 right-0 mt-2 mr-2 text-black">✔</span>
          )}
        </div>
        <span>{errors.password?.message}</span>

        <button type="submit" className="bg-black text-white p-2 rounded">
          Войти
        </button>
      </form>

      <div>{error}</div>
    </div>
  );
}

export default LoginPage;
