import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '~/store/modules/auth/actions';
import Logo from '~/assets/M.png';
import { Container, Content, Profile, Logout } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.profile);

  function logOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={Logo} alt="Logo" />
          </Link>
        </nav>
        <aside>
          <Profile>
            <strong>{user.name}</strong>
            <Link to="/profile">Meu Perfil</Link>
          </Profile>
          <Logout type="button" onClick={logOut}>
            Sair
          </Logout>
        </aside>
      </Content>
    </Container>
  );
}
