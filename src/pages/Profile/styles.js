import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      color: rgba(255, 255, 255, 0.9);
      font-size: 18px;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 10px 0 20px;
    }

    button {
      height: 50px;
      padding: 0 15px;
      margin: 0 0 10px;
      border: 0;
      border-radius: 4px;
      background-color: #f94d6a;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }
    }

    a {
      color: #fff;
      opacity: 0.6;
      height: 21px;
      font-size: 16px;
      font-weight: bold;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
