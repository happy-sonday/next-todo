import axios from "axios";
import Axios from ".";
import { TodoType } from "../../types/todo";

/** 리스트 불러오기 api */
export const getTodosAPI = () => Axios.get<TodoType[]>("api/todos");

/** 항목 체크하기 */
export const checkTodoAPI = (id: number) => axios.patch(`api/todos/${id}`);

/** 투두 추가하기 API Body */
interface AddTodoAPIBody {
  text: string;
  color: TodoType["color"];
}

/** 추가하기 API */
export const addTodoAPI = (body: AddTodoAPIBody) =>
  axios.post("/api/todos", body);

/** 삭제하기 API */
export const deleteTodoAPI = (id: number) => axios.delete(`/api/todos/${id}`);
