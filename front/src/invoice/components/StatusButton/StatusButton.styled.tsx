import styled from "styled-components";

export const StatusButtonStyled = styled.div<{ status: string }>`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  background: ${(props) =>
    props.status === "paid"
      ? "rgba(51, 214, 159, 0.06)"
      : props.status === "draft"
      ? "rgba(55, 59, 83, 0.06)"
      : "rgba(255, 143, 0, 0.06)"};

  color: ${(props) =>
    props.status === "paid"
      ? "#33d69f"
      : props.status === "draft"
      ? "#373b53"
      : "#ff8f00"};

  span {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 8px;
    background: ${(props) =>
      props.status === "paid"
        ? "#33d69f"
        : props.status === "draft"
        ? "#373b53"
        : "#ff8f00"};
  }
`;
