import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import TodoList from "../components/TodoList";
import GlobalStyle from "../styles/GlobalStyle";
import { TodoType } from "../types/todo";

const Container = styled.div`
  padding: 20px;
`;

const todos: TodoType[] = [{ id: 1, text: "마트 가서 장보기", color: "red", checked: false }];

const index: NextPage = () => {
  // 해당 컴포넌트를 받을 제네릭 타입으로 설정하지않으면 No quick fixes availble Error 발생
  return <TodoList todos={todos} />;
};

export default index;
