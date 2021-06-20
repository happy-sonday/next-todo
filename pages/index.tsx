import { GetServerSideProps, NextPage } from "next";
import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import TodoList from "../components/TodoList";
import { getTodosAPI } from "../lib/api/todo";
import GlobalStyle from "../styles/GlobalStyle";
import { TodoType } from "../types/todo";

const Container = styled.div`
  padding: 20px;
`;

interface IProps {
  todos: TodoType[];
}

const index: NextPage<IProps> = ({ todos }) => {
  return <TodoList todos={todos} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await getTodosAPI(); // lib/api에 추상화

    return { props: { todos: data } };
  } catch (e) {
    console.log(e);
    return { props: { todos: [] } };
  }
};
export default index;
