import Axios from ".";
import { TodoType } from "../../types/todo";

/** 리스트 불러오기 api */
export const getTodosAPI = () => Axios.get<TodoType[]>("api/todos");
