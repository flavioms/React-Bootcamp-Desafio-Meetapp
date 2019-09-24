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
    flex-grow: 2;
    font-size: 32px;
    font-weight: normal;
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
    background-color: #4dbaf9;
    color: #fff;
    transition: background 0.2s;

    svg {
      margin-right: 12px;
    }

    &:hover {
      background: ${darken(0.05, '#4dbaf9')};
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 20px;
    margin-left: 16px;
    border: none;
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

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const Description = styled.p`
  color: #fff;
  font-size: 18px;
  line-height: 1.78;
  margin: 25px 0;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #999;

  p {
    display: flex;
    flex-direction: row;
    align-items: center;

    &:first-child {
      margin-right: 32px;
    }
  }
`;
