import { useState, useEffect } from "react";

const Note = ({ user, logout }) => {
  const { id, name, username, phone, website } = user;
  useEffect(() => {}, []);

  return (
    <>
      <button onClick={logout}>로그아웃</button>
      <div>
        <h1>내 정보</h1>
        <ul>
          <li>id: {id}</li>
          <li>name: {name}</li>
          <li>username: {username}</li>
          <li>phone: {phone}</li>
          <li>website: {website}</li>
        </ul>
      </div>
      <p>오늘의 할일</p>
      <p>내가 쓴 게시물</p>
    </>
  );
};

export default Note;
