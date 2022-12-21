import styled from "styled-components";

export const InvoicesListStyled = styled.ul<{ dark: string }>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  a,
  h3,
  h4,
  h5 {
    color: ${(props) => (props.dark === "dark" ? "white !important" : "")};
  }
`;
