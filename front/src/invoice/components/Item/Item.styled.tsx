import styled from "styled-components";

export const ItemStyled = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 18px;
  & > * {
    text-indent: 10px;
    flex: 1 1 0;
    width: 0;
    color: #7e88c3;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.25px;
    text-align: left;
    padding: 17px 0;

    &:nth-child(1) {
      flex: 3 1 0;
    }

    &:nth-child(3),
    &:nth-child(4) {
      flex: 2 1 0;
    }
  }

  button {
    background: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
