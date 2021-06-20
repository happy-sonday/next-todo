import { NextApiRequest, NextApiResponse } from "next";
// eslint-disable-next-line import/no-useless-path-segments
import Data from "../../../lib/data";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PATCH") {
    try {
      const todoId = Number(req.query.id);
      const todo = Data.todo.exist({ id: todoId });
      if (!todo) {
        res.statusCode = 404;
        res.end();
      }

      const todos = Data.todo.getList();
      const changedTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          console.log("실행", todo.id, todo.checked);
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      Data.todo.write(changedTodos);
      res.statusCode = 200;
      res.end();
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }
};
