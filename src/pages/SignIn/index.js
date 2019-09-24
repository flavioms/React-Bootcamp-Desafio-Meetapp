import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signInRequest } from '~/store/modules/auth/actions';
import Logo from '~/assets/M.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail Inválido')
    .required('E-mail Obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <img src={Logo} alt="Logo" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha"
        />
        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register">Criar Conta</Link>
      </Form>
    </>
  );
}
