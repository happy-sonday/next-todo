import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    return res.send("hello GET api");
  }

  res.statusCode = 405;
  console.log(res.statusCode);
  return res.end();
};
