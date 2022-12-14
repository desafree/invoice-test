import styled from "styled-components";

export const OptionsDetailStyled = styled.div<{ dark: string }>`
  display: flex;
  gap: 8px;
  align-items: center;
  background: ${(props) => (props.dark === "dark" ? "#1e2139" : "#ffffff")};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;
  padding: 20px 32px;

  h5 {
    color: #858bb2;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.25px;
    text-align: left;
  }

  & > * {
    cursor: pointer;

    &:nth-child(2) {
      margin-right: auto;
      padding: 13px 18px;
    }

    &:nth-child(3) {
      background: #f9fafe;
      border-radius: 24px;
      color: #7e88c3;
      font-size: 12px;
      font-weight: 700;
      line-height: 15px;
      letter-spacing: -0.25px;
      text-align: left;
      padding: 17px 24px;
      border: none;
    }

    &:nth-child(4) {
      background: #ec5757;
      border-radius: 24px;
      color: white;
      font-size: 12px;
      font-weight: 700;
      line-height: 15px;
      letter-spacing: -0.25px;
      text-align: left;
      padding: 17px 24px;
      border: none;
    }

    &:nth-child(5) {
      background: #7c5dfa;
      border-radius: 24px;
      color: white;
      font-size: 12px;
      font-weight: 700;
      line-height: 15px;
      letter-spacing: -0.25px;
      text-align: left;
      padding: 17px 24px;
      border: none;
    }
  }
`;
