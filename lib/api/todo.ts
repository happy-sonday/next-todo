import axios from "axios";
import Axios from ".";
import { TodoType } from "../../types/todo";

/** 리스트 불러오기 api */
export const getTodosAPI = () => Axios.get<TodoType[]>("api/todos");

/** 항목 체크하기 */
export const checkTodoAPI = (id: number) => axios.patch(`api/todos/${id}`);
