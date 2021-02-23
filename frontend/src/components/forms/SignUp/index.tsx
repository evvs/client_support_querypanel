import React, { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHttp } from '../../../hooks/useHttp';
import s from './styles.module.scss';

const SignUpForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { register, handleSubmit } = useForm();
  const {
    request, errors, clearErrors, loading,
  } = useHttp();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const signUpHandler = async (
    data: Record<string, unknown>,
  ): Promise<void> => {
    clearErrors();
    await request('/auth/register', 'post', data);
  };

  return (
    <form
      className={s.form}
      onSubmit={handleSubmit((data) => signUpHandler(data))}
    >
      <input
        type="text"
        className="input-main"
        placeholder="Name"
        name="name"
        ref={(ref) => {
          inputRef.current = ref;
          register(ref);
        }}
      />
      <input
        type="text"
        className="input-main"
        placeholder="Login"
        name="login"
        ref={register}
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

export default SignUpForm;
