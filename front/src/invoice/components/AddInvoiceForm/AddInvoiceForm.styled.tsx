import styled from "styled-components";

export const AddInvoiceFormStyled = styled.div`
  position: absolute;
  top: 0;
  left: 90px;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  min-height: 100vh;

  form {
    padding: 56px 43px;
    background: ${(props) => (props.theme === "dark" ? "#141625" : "#fff")};
    border-radius: 0px 20px 20px 0px;
    width: 750px;
    max-height: 100vh;
    overflow: auto;

    h3 {
      color: ${(props) => (props.theme === "dark" ? "white" : "black")};
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: -0.5px;
      text-align: left;
      margin-bottom: 43px;
    }
  }
`;
