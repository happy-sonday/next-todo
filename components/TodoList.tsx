import React from "react";
import styled from "styled-components";
import { TodoType } from "../types/todo";
import palette from "../styles/pallete";

interface IProps {
  todos: TodoType[];
}

const Container = styled.div`
  width: 100%;

  /* .todo-list-header {
    padding: 12px;
    border-bottom: 1px solid ${palette.gray};

    .todo-list-last-todo {
      font-size: 14px;
      span {
        margin-left: 8px;
      }
    }
  } */
`;

const TodoHeader = styled.div`
  padding: 12px;
  border-bottom: 1px solid ${palette.gray};
`;

const TodoListLastNumber = styled.p`
  font-size: 14px;
  span {
    margin-left: 8px;
  }
`;

const ToDoList: React.FC<IProps> = ({ todos }) => {
  return (
    <Container>
      {/*  <div className="todo-list-header">
        <p className="todo-list-last-todo">
          남은 TODO<span>{todos.length}</span>
        </p>
      </div> */}

      <TodoHeader>
        <TodoListLastNumber>
          남은 TODO<span>{todos.length}</span>
        </TodoListLastNumber>
      </TodoHeader>
    </Container>
  );
};

export default ToDoList;
