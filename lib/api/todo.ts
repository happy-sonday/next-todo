import axios from ".";
import { TodoType } from "../../types/todo";

/** 리스트 불러오기 API */
export const getTodosAPI = () => axios.get<TodoType[]>("api/todos");

/** 체크하기 API */
export const checkTodoAPI = (id: number) => axios.patch(`api/todos/${id}`);

/** 추가하기 API Body */
interface AddTodoAPIBody {
  text: string;
  color: TodoType["color"];
}

/** 추가하기 API */
export const addTodoAPI = (body: AddTodoAPIBody) =>
  axios.post("/api/todos", body);

/** 삭제하기 API */
export const deleteTodoAPI = (id: number) => axios.delete(`/api/todos/${id}`);
