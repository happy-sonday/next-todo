import { NextApiRequest, NextApiResponse } from "next";
// eslint-disable-next-line import/no-useless-path-segments
import Data from "../../../lib/data";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const todos = await Data.todo.getList();
      res.statusCode = 200;
      return res.send(todos);
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }

  res.statusCode = 405;
  return res.end();
};
