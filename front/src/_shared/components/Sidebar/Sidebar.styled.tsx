import styled from "styled-components";

export const SidebarStyled = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 103px;
  background: #373b53;
  border-radius: 0px 20px 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  span {
    background: #7c5dfa;
    border-radius: 0px 20px 20px 0px;
    width: 103px;
    height: 103px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 40px;
    }
  }

  button {
    background: transparent;
    border: none;
    margin: 24px auto;
    cursor: pointer;
  }
`;
