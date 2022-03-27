import { useState } from "react";

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
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="ID를 입력하세요." value={userId} onChange={changeInput} />
    </form>
  );
};

export default Login;
