import styled from "styled-components";

export const EditItemsStyled = styled.div`
  padding: 32px;
  background: #f9fafe;
  border-radius: 8px 8px 0px 0px;
  margin-top: 45px;

  .tags {
    display: flex;
    margin-bottom: 32px;
    & > * {
      flex: 1 1 0;
      width: 0;
      color: #7e88c3;
      font-size: 11px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: -0.2291666716337204px;
      text-align: left;

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
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;
