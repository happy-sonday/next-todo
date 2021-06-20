import { GetServerSideProps, NextPage } from "next";
import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import Axios from "axios";
import TodoList from "../components/TodoList";
import GlobalStyle from "../styles/GlobalStyle";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todo";

const Container = styled.div`
  padding: 20px;
`;

const todos: TodoType[] = [
  { id: 1, text: "마트 가서 장보기", color: "red", checked: false },
  { id: 2, text: "정보처리기사 실기 공부", color: "orange", checked: true },
  { id: 3, text: "리액트 에제 실습", color: "yellow", checked: false },
  { id: 4, text: "화면 개선 및 서비스 기획", color: "blue", checked: false }
];

const app: NextPage = () => {
  // 해당 컴포넌트를 받을 제네릭 타입으로 설정하지않으면 No quick fixes availble Error 발생
  return <TodoList todos={todos} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await getTodosAPI();
    console.log(data);
    return { props: {} };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default app;
