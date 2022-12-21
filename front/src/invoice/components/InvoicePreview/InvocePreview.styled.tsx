import styled from "styled-components";

export const InvoicePreviewStyled = styled.li<{ dark: string }>`
  background: ${(props) => (props.dark === "dark" ? "#1e2139" : "#fff")};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;

  & > * {
    flex: 1 1 0;
    width: 0;
  }

  h4 {
    color: #0c0e16;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    text-align: left;

    span {
      color: #7e88c3;
    }
  }

  h5 {
    color: #7e88c3;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.25px;
    text-align: left;
  }

  h3 {
    color: #0c0e16;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.800000011920929px;
    text-align: left;
  }

  a {
    background: transparent;
    cursor: pointer;
    border: none;
    padding: 5px;
    text-align: right;
  }
`;
