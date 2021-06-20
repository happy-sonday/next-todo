import { readFileSync, writeFileSync } from "fs";
import { TodoType } from "../../types/todo";
import todos from "../api/todos";

/** todo 목록 조회 */
const getList = () => {
  const todosBuffer = readFileSync("data/todos.json");
  const todosString = todosBuffer.toString();
  if (!todosString) {
    return [];
  }
  const todos: TodoType[] = JSON.parse(todosString);
  return todos;
};

/** id로 해당 todo아이템 조회 */
const exist = ({ id }: { id: number }) => {
  const todos = getList();
  const todo = todos.some((todos) => todos.id === id);
  return todo;
};

//* 목록 저장하기
const write = async (todos: TodoType[]) => {
  writeFileSync("data/todos.json", JSON.stringify(todos));
};
export default { getList, exist, write };
