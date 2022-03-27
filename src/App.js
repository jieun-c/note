import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./components/login";
import Note from "./components/note";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {}, [isLogin]);

  const getUsers = async () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const res = await axios.get(url);

    if (res.status === 200) {
      setUsers(res.data);
    }
  };

  const login = (userId) => {
    const current = users.find((user) => String(user.id) === userId);
    if (!current) {
      alert("해당하는 id가 없습니다.");
      return;
    }

    setIsLogin(true);
    setUser(current);
    alert("Welcome!");
  };

  const logout = () => {
    setIsLogin(false);
    setUser({});
    alert("Bye!");
  };

  return <>{isLogin && user ? <Note user={user} logout={logout} /> : <Login login={login} />}</>;
};

export default App;
