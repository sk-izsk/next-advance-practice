// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const Key: string = "catch me if you can";

const login = (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body) {
    res.statusCode = 404;
    res.end("Error");
    return;
  }
  const { username, password } = req.body;
  console.log("username: ", username);
  const token = jwt.sign(
    {
      username,
      admin: username === "admin" && password === "admin",
    },
    Key
  );

  res.status(200).json({ token });
};

export default login;
