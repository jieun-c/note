import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  min-width: 300px;
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

export const UserInfo = styled.div`
  margin: 1em 0;
`;

export const PostsBox = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1em 0.5em;
`;
export const PostBox = styled.article`
  width: 180px;
  padding: 1em;
  border: 1px solid #eee;
  box-shadow: 2px 2px 2px gray;
  p {
    padding-bottom: 0.5em;
  }
  > div {
    padding: 1em 0;
  }
`;

export const TodoForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 0;
`;

export const TodoItems = styled.ul`
  li {
    padding: 1em;
    margin: 1em;
    background-color: #171746;
    color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 2px gray;
  }
  p {
    padding: 0.5em 0;
  }
  p:last-child {
    color: orange;
  }
`;
