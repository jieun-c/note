import { UserInfo } from "../styled/styled";

const User = ({ user }) => {
  const { id, name, username, phone, website } = user;

  return (
    <UserInfo>
      <ul>
        <li>id: {id}</li>
        <li>name: {name}</li>
        <li>닉네임: {username}</li>
        <li>phone: {phone}</li>
        <li>website: {website}</li>
      </ul>
    </UserInfo>
  );
};

export default User;
