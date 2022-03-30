import { HeaderLayer, Header } from "../styled/styled";
import { Button } from "@mui/material";
import { memo } from "react";

const Head = memo(({ user, logout }) => {
  return (
    <div>
      <HeaderLayer />
      <Header>
        <p>
          안녕하세요, <span>{user.name}</span>
        </p>
        <Button variant="contained" onClick={logout}>
          로그아웃
        </Button>
      </Header>
    </div>
  );
});

export default Head;
