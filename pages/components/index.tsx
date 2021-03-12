import axios, { AxiosResponse } from "axios";
import jwt from "jsonwebtoken";
import { useState } from "react";
import ScreenA from "./ScreenA";
import ScreenB from "./ScreenB";

interface Props {}

const components: React.FC<Props> = () => {
  const [username, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [message, setMessage] = useState<string>();

  const handleForm = async (e) => {
    e.preventDefault();
    const response: AxiosResponse<{ token: string }> = await axios.post(
      "/api/login",
      {
        username,
        password,
      }
    );
    const token: string = response.data.token;
    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      console.log("json: ", json);
      setMessage(
        `Hi! ${json.username} and you are ${
          json.admin ? "an admin" : "not an admin"
        }`
      );
    } else {
      setMessage("something goes wrong");
    }
  };

  return (
    <>
      <ScreenA />
      <ScreenB />
      <h1>{message}</h1>
      <form method="POST" action="/api/login" onSubmit={handleForm}>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          name="username"
          value={username}
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default components;
