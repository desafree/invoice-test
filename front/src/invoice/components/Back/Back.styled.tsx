import styled from "styled-components";
import Back from "./Back";

export const BackStyled = styled(Back)`
  display: flex;
  align-items: center;
  gap: 28px;
  /*  color: #0c0e16;*/
  color: ${(props) => (props.dark === "dark" ? "white" : "#0c0e16")};
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  text-align: left;
  margin-bottom: 32px;
  background: transparent;
  cursor: pointer;
  border: none;
`;
