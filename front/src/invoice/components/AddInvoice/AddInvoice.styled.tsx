import styled from "styled-components";
import AddInvoice from "./AddInvoice";

export const AddInvoiceStyled = styled(AddInvoice)`
  background: #7c5dfa;
  border-radius: 24px;
  padding: 8px 16px 8px 8px;
  display: inline-block;
  border: none;
  font-family: "League Spartan", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  text-align: left;
  color: white;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  span {
    display: inline-block;
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
