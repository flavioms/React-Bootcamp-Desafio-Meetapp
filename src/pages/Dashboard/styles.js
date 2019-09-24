import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 50px;

  h2 {
    font-size: 32px;
    font-weight: bold;
    color: #fff;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 20px;
    border-radius: 4px;
    background-color: #f94d6a;
    color: #fff;
    transition: background 0.2s;

    svg {
      margin-right: 12px;
    }

    &:hover {
      background: ${darken(0.05, '#f94d6a')};
    }
  }
`;

export const ListMeetup = styled.ul`
  width: 100%;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    height: 50px;
    padding: 0 15px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 18px;
    margin: 0 0 10px;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;

  svg {
    margin-left: 12px;
    color: #f94d6a;
  }
`;
