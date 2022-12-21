import styled from "styled-components";
import DeletePopUp from "./DeletePopUp";

export const DeletePopUpStyled = styled(DeletePopUp)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);

  & > div {
    padding: 48px;
    background: ${(props) => (props.dark === "dark" ? "#1e2139" : "#fff")};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;

    h3 {
      color: ${(props) => (props.dark === "dark" ? "#fff" : "#0c0e16")};
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: -0.5px;
      text-align: left;
    }

    p {
      color: ${(props) => (props.dark === "dark" ? "#fff" : "#888eb0")};

      font-size: 12px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: -0.25px;
      text-align: left;
      margin-bottom: 16px;
    }
    .buttons {
      text-align: right;

      button {
        padding: 17px 24px;
        font-size: 12px;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: -0.25px;
        text-align: left;
        margin-left: auto;

        &:nth-child(1) {
          background: #f9fafe;
          border-radius: 24px;
          border: none;
          margin-right: 8px;
        }

        &:nth-child(2) {
          background: #ec5757;
          color: white;
          border-radius: 24px;
          border: none;
          margin-right: 8px;
        }
      }
    }
  }
`;
