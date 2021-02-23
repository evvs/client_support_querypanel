import React, { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHttp } from '../../../hooks/useHttp';
import { useAuth } from '../../../context/authContext';
import s from './styles.module.scss';

type responseType = {
  data: {
    token: string;
  };
};

const SigInForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { register, handleSubmit } = useForm();
  const {
    request, errors, clearErrors, loading,
  } = useHttp();
  const { setAuth } = useAuth();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const signInHandler = async (data: Record<string, unknown>): Promise<void> => {
    clearErrors();
    const res = (await request('/auth/login', 'post', data)) as responseType;
    localStorage.setItem('token', res.data.token);
    setAuth(true);
  };

  return (
    <form
      className={s.form}
      onSubmit={handleSubmit((data) => signInHandler(data))}
    >
      <input
        type="text"
        className="input-main"
        placeholder="Login"
        name="login"
        ref={(ref) => {
          inputRef.current = ref;
          register(ref);
        }}
      />
      <input
        type="password"
        className="input-main"
        placeholder="Password"
        name="password"
        ref={register}
      />
      <div className={s.submit_error_wrapper}>
        <button type="submit" className="btn btn-outlined" disabled={loading}>
          Submit
        </button>
        <span className={s.error}>{errors}</span>
      </div>
    </form>
  );
};

export default SigInForm;
