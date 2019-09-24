import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" id="name" placeholder="Nome completo" />
        <Input
          name="email"
          id="email"
          type="email"
          placeholder="Seu endereço de e-mail"
        />
        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha antiga!"
        />
        <Input name="password" type="password" placeholder="Sua nova senha!" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />
        <button type="submit">Atualizar Perfil</button>
      </Form>
    </Container>
  );
}
