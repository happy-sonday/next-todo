import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { useRouter } from "next/dist/client/router";
import { TodoType } from "../types/todo";
import palette from "../styles/pallete";
import CheckMarkIcon from "../public/statics/iconmonstr-checkbox-1.svg";
import TrashCanIcon from "../public/statics/iconmonstr-trash-can-14.svg";
import { checkTodoAPI } from "../lib/api/todo";

type ObjectIndexType = {
  [key: string]: number | undefined;
};

interface IProps {
  todos: TodoType[];
}

const Container = styled.div`
  width: 100%;

  .todo-list-header {
    padding: 12px;
    border-bottom: 1px solid ${palette.gray};

    .todo-list-last-todo {
      font-size: 14px;
      span {
        margin-left: 8px;
      }
    }
  }

  //NOTE:색깔 라벨링 및 카운트
  .todo-list-header-colors {
    display: flex;
    .todo-list-header-color-num {
      display: flex;
      margin-right: 8px;
      p {
        font-size: 14px;
        line-height: 16px;
        margin: 0;
        margin-left: 6px;
      }
      .todo-list-header-round-color {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }
    }
  }
  .bg-blue {
    background-color: ${palette.blue};
  }
  .bg-green {
    background-color: ${palette.green};
  }
  .bg-navy {
    background-color: ${palette.navy};
  }
  .bg-orange {
    background-color: ${palette.orange};
  }
  .bg-red {
    background-color: ${palette.red};
  }
  .bg-yellow {
    background-color: ${palette.yellow};
  }

  //NOTE: 리스트 스타일링

  .todo-list {
    .todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 52px;
      border-bottom: 1px solid ${palette.gray};

      .todo-left-side {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        .todo-color-block {
          width: 12px;
          height: 100%;
        }
        .checked-todo-text {
          color: ${palette.gray};
          text-decoration: line-through;
        }
        .todo-text {
          margin-left: 12px;
          font-size: 16px;
        }
      }
    }
  }

  .todo-right-side {
    display: flex;
    align-items: center;
    margin-right: 12px;
    svg {
      &:first-child {
        margin-right: 16px;
      }
    }
    .todo-trash-can {
      width: 24px;
      path {
        fill: ${palette.deep_red};
      }
    }
    .todo-check-mark {
      fill: ${palette.deep_green};
    }
    .todo-button {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid ${palette.gray};
      background-color: transparent;
      outline: none;
      margin-left: 8px;
    }
  }
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

const checkTodo = async (id: number) => {
  try {
    await checkTodoAPI(id);
    console.log("체크하였습니다.");
  } catch (e) {
    console.log(e);
  }
};
const ToDoList: React.FC<IProps> = ({ todos }) => {
  //* 색깔 객체 구하기 1
  const getTodoColorNums = useCallback(() => {
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let green = 0;
    let blue = 0;
    let navy = 0;
    todos.forEach((todo) => {
      switch (todo.color) {
        case "red":
          red += 1;
          break;
        case "orange":
          orange += 1;
          break;
        case "yellow":
          yellow += 1;
          break;
        case "green":
          green += 1;
          break;
        case "blue":
          blue += 1;
          break;
        case "navy":
          navy += 1;
          break;
        default:
          break;
      }
    });

    return {
      red,
      orange,
      yellow,
      green,
      blue,
      navy
    };
  }, [todos]);

  //* 객체의 문자열 인덱스 사용을 위한 타입
  type ObjectIndexType = {
    [key: string]: number | undefined;
  };

  //* 색깔 객체 구하기 2
  const todoColorNums = useMemo(() => {
    const colors: ObjectIndexType = {};
    todos.forEach((todo) => {
      const value = colors[todo.color];
      if (!value) {
        //* 존재하지않던 key라면
        colors[`${todo.color}`] = 1;
      } else {
        //* 존재하는 키라면
        colors[`${todo.color}`] = value + 1;
      }
    });
    return colors;
  }, [todos]);

  return (
    <Container>
      <div className="todo-list-header">
        <p className="todo-list-last-todo">
          남은TODO<span>{todos.length}개</span>
        </p>
        <div className="todo-list-header-colors">
          {Object.keys(todoColorNums).map((color, index) => (
            <div className="todo-list-header-color-num" key={index}>
              <div className={`todo-list-header-round-color bg-${color}`} />
              <p>{todoColorNums[color]}개</p>
            </div>
          ))}
        </div>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            {/* NOTE:리스트-왼쪽 */}
            <div className="todo-left-side">
              <div className={`todo-color-block bg-${todo.color}`} />
              <p className={`todo-text ${todo.checked ? "checked-todo-text" : ""}`}>{todo.text}</p>
            </div>
            {/* NOTE:리스트-오른쪽 */}

            <div className="todo-right-side">
              {todo.checked && (
                <>
                  <TrashCanIcon className="todo-trash-can" onClick={() => {}} />
                  <CheckMarkIcon
                    className="todo-check-mark"
                    onClick={() => {
                      checkTodo(todo.id);
                    }}
                  />
                </>
              )}
              {!todo.checked && (
                <button
                  type="button"
                  className="todo-button"
                  onClick={() => {
                    checkTodo(todo.id);
                  }}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ToDoList;
