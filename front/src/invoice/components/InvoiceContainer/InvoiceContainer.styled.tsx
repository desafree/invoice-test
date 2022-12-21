import styled from "styled-components";

export const InvoiceContainerStyled = styled.div<{ dark: string }>`
  padding: 48px;
  background: ${(props) => (props.dark === "dark" ? "#1e2139" : "#fff")};
  background: #ffffff;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;
    h3,
    h5,
    p {
      color: ${(props) => (props.dark === "dark" ? "white" : "")};
    }
  }
`;
