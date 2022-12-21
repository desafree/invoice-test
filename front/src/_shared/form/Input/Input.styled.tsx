import styled from "styled-components";

export const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    color: #7e88c3;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.25px;
    text-align: left;
  }

  input {
    padding: 17px 20px;
    font-family: "League Spartan", sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    text-align: left;
    color: #0c0e16;
  }
`;
