import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "../styled/styled";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Head from "./head";
import User from "./user";
import Posts from "./posts";
import Todos from "./todos";

const Note = ({ user, logout }) => {
  const [selected, setSelected] = useState("allPosts");

  const [allPosts, setAllPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [myTodos, setMyTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAll();
  }, [selected]);

  const getAll = () => {
    const urlAllPost = `https://jsonplaceholder.typicode.com/posts`;
    const urlMyPost = `https://jsonplaceholder.typicode.com/users/${user.id}/posts`;
    const urlMyTodo = `https://jsonplaceholder.typicode.com/users/${user.id}/todos`;

    const motherPromise = Promise.all([
      //
      axios.get(urlAllPost),
      axios.get(urlMyPost),
      axios.get(urlMyTodo),
    ]);

    motherPromise.then((values) => {
      setAllPosts(values[0].data);
      setMyPosts(values[1].data);
      setMyTodos(values[2].data);
      setIsLoading(false);
    });
  };

  const addTodos = (title) => {
    setMyTodos([{ id: Date.now().toString(), title, completed: false }, ...myTodos]);
  };

  return (
    <Container>
      <Head user={user} logout={logout} />
      <User user={user} />

      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="selected"
          onChange={(e) => setSelected(e.target.value)}
          value={selected}
        >
          <FormControlLabel value="allPosts" control={<Radio />} label="All Post" />
          <FormControlLabel value="myPosts" control={<Radio />} label="My Post" />
          <FormControlLabel value="myTodos" control={<Radio />} label="To do List" />
        </RadioGroup>
      </FormControl>

      {isLoading && <h1 style={{ textAlign: "center", fontSize: "3rem" }}>로딩중..</h1>}
      {selected === "allPosts" && <Posts posts={allPosts} />}
      {selected === "myPosts" && <Posts posts={myPosts} />}
      {selected === "myTodos" && <Todos todos={myTodos} addTodos={addTodos} />}
    </Container>
  );
};

export default Note;
