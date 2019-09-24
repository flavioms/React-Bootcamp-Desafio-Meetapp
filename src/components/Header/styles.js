import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
`;
export const Content = styled.div`
  height: 92px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  aside {
    display: flex;
    flex-direction: row;
  }
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;

  strong {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  }

  a {
    display: block;
    font-size: 14px;
    color: #999;
  }
`;
export const Logout = styled.button`
  width: 70px;
  margin-left: 30px;
  border-radius: 4px;
  border: none;
  background-color: #d44059;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
