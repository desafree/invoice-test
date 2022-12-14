import styled from "styled-components";

export const InvoiceDataStyled = styled.div`
  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 21px;
    .id {
      color: #0c0e16;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: -0.800000011920929px;
      text-align: left;
      span {
        color: #888eb0;
      }
    }

    .from {
      text-align: right;
    }
  }

  h5 {
    color: #7e88c3;
    font-size: 11px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.2291666716337204px;
  }

  h3 {
    color: #0c0e16;
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.3125px;
    text-align: left;
  }

  .infos {
    display: flex;
    gap: 100px;
    justify-content: space-between;

    .dates {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
  }
`;
