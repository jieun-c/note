import Button from "@mui/material/Button";
import { Container, HeaderLayer, Header } from "../styled/styled";
import Posts from "./posts";
import Todos from "./todos";
import User from "./user";

const Note = ({ user, logout }) => {
  return (
    <Container>
      <HeaderLayer />
      <Header>
        <p>
          안녕하세요, <span>{user.name}</span>
        </p>
        <Button variant="contained" onClick={logout}>
          로그아웃
        </Button>
      </Header>

      <User user={user} />

      <Posts />
      <Todos />
    </Container>
  );
};

export default Note;
