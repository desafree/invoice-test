import styled from "styled-components";

export const NoInvoiceStyled = styled.div<{ dark: string }>`
  margin-top: 141px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 64px;
  }

  h3 {
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.625px;
    text-align: left;
    color: ${(props) => (props.dark === "dark" ? "#0c0e16" : "")};
  }

  p {
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.25px;
    text-align: center;
    max-width: 220px;
    color: ${(props) => (props.dark === "dark" ? "#888eb0" : "")};
  }
`;
