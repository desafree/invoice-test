import styled from "styled-components";

export const OptionsRowStyled = styled.div<{ dark: string }>`
  display: flex;
  align-items: center;
  margin-bottom: 65px;

  .title {
    margin-right: auto;
    h2 {
      color: ${(props) => (props.dark === "dark" ? "#fff" : "#0c0e16")};
      font-size: 32px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: -1px;
      text-align: left;
    }

    p {
      color: ${(props) => (props.dark === "dark" ? "#dfe3fa" : "#888eb0")};
      color: #888eb0;
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;
      letter-spacing: -0.25px;
      text-align: left;
    }

    select {
      color: ${(props) => (props.dark === "dark" ? "#gray !important" : "")};
    }
  }
`;
