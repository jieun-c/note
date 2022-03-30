import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { TodoForm, TodoItems } from "../styled/styled";

const Todos = ({ addTodos, todos }) => {
  const [data, setData] = useState(todos);
  const [text, setText] = useState("");

  useEffect(() => {
    setData(todos.filter((item) => item.title.toLowerCase().indexOf(text.toLowerCase()) !== -1));
  }, [text]);

  const changeInput = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodos(text);
    setText("");
  };

  return (
    <>
      <TodoForm onSubmit={onSubmit}>
        <TextField variant="standard" label="title 검색" value={text} onChange={changeInput} />
        <Button type="submit" variant="outlined">
          추가하기
        </Button>
      </TodoForm>

      <TodoItems>
        {data.map((item) => (
          <li key={item.id}>
            <p>title: {item.title}</p>
            <p>completed: {item.completed ? "완료" : "진행중"}</p>
            <p>ID: {item.id}</p>
          </li>
        ))}
      </TodoItems>
    </>
  );
};

export default Todos;
