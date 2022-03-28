import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1em;
  box-sizing: content-box;
`;

export const HeaderLayer = styled.div`
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
`;

export const Header = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  input {
    width: 90%;
    max-width: 300px;
    height: 50px;
    font-size: 1.5rem;
    padding: 1em;
  }
`;

export const UserInfo = styled.div``;
