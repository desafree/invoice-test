import styled from "styled-components";

export const AddFormDataStyled = styled.div`
  .error {
    color: red;
  }
  & > div {
    h4 {
      color: #7c5dfa;
      font-size: 12px;
      font-weight: 700;
      line-height: 15px;
      letter-spacing: -0.25px;
      text-align: left;
      margin-bottom: 24px;
      margin-top: 48px;
    }

    .single,
    .double,
    .triple {
      margin-bottom: 24px;
    }

    .input {
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

      input,
      select {
        padding: 17px 20px;
        font-family: "League Spartan", sans-serif;
        font-size: 12px;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: -0.25px;
        text-align: left;
        color: #0c0e16;
      }
    }

    .double,
    .triple {
      display: flex;
      gap: 24px;
      & > div {
        flex: 1 1 0;
        width: 0;
      }
    }
  }
`;
