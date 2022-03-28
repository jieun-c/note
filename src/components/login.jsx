import { useState } from "react";
import { Form } from "../styled/styled";

const Login = ({ login }) => {
  const [userId, setUserId] = useState("");

  const changeInput = (e) => {
    setUserId(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!userId) {
      alert("id 를 입력하세요");
    }

    login(userId);
    setUserId("");
  };

  return (
    <Form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="ID를 입력하세요."
        value={userId}
        onChange={changeInput}
        autoFocus
      />
    </Form>
  );
};

export default Login;
