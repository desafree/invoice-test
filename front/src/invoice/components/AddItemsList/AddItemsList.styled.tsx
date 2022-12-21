import styled from "styled-components";

export const AddItemsListStyled = styled.div`
  margin-top: 32px;

  ul {
    list-style: none;
  }
  h4 {
    color: #777f98;
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: -0.375px;
    text-align: left;
    margin-bottom: 17px;
  }

  .tags {
    display: flex;
    margin-bottom: 17px;

    & > * {
      flex: 1 1 0;
      width: 0;
      color: #7e88c3;
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;
      letter-spacing: -0.25px;
      text-align: left;

      &:nth-child(1) {
        flex: 3 1 0;
      }

      &:nth-child(3),
      &:nth-child(4) {
        flex: 2 1 0;
      }
    }
  }

  .btn-add {
    width: 100%;
    padding: 17px;
    background: #f9fafe;
    border-radius: 24px;
    border: none;
    color: #7e88c3;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    text-align: center;
    margin-bottom: 40px;
  }
`;
