import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const ToDoList: React.FC = () => {
  return (
    <Container>
      <h1>TodoList</h1>
    </Container>
  );
};

export default ToDoList;
