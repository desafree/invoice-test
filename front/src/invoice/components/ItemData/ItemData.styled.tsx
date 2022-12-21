import styled from "styled-components";

export const ItemDataStyled = styled.div`
  display: flex;

  h4 {
    color: #7e88c3 !important;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    text-align: left;
  }

  h3 {
    color: #0c0e16 !important;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    text-align: left;
  }

  & > * {
    flex: 1 1 0;
    width: 0;

    &:nth-child(1) {
      flex: 3 1 0 !important;
      text-align: left;
    }

    &:nth-child(2) {
      text-align: center;
    }

    &:nth-child(3) {
      text-align: right;
    }

    &:nth-child(4) {
      flex: 2 1 0 !important;
      text-align: right;
    }
  }
`;
