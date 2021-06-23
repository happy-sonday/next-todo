import { TodoType } from "../types/todo";

export const INIT_TODO_LIST = "todo/INIT_TODO_LIST";

export const setTodo = (payload : TodoType[]) => {
    return { 
    type: INIT_TODO_LIST,
    payload,
    };
};

export const todoActions = { setTodo };

interface TodoReduxState { 
    todos: TodoType[];
}

const initalState : TodoReduxState =  {
    todos: [],
}

export default function reducer ( state = initalState, action : any ){
    switch (action.type) {
        case INIT_TODO_LIST:{
            const newState = { ...state, todos: action.payload };
            return newState;
        }
        default:
            return state;
    }
}
