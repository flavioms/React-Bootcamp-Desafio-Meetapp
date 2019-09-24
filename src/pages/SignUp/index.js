import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Logo from '~/assets/M.png';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('E-mail Inválido')
    .required('E-mail Obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={Logo} alt="Logo" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input type="text" name="name" id="name" placeholder="Nome completo" />
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
        <button type="submit">Cadastrar</button>
        <Link to="/">Já tenho Login</Link>
      </Form>
    </>
  );
}
