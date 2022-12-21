import styled from "styled-components";

export const FormOptionsStyled = styled.div`
  display: flex;
  gap: 8px;
  & > * {
    padding: 17px 24px;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    text-align: left;
    border-radius: 24px;
    border: none;
    cursor: pointer;

    &:nth-child(1) {
      background: #f9fafe;
      color: #7e88c3;
      margin-right: auto;
    }

    &:nth-child(2) {
      background: #373b53;
      color: #fff;
    }

    &:nth-child(3) {
      background: #7c5dfa;
      color: white;
    }
  }
`;
