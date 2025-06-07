/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "antd";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/features/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
type TLogin = {
  id: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<TLogin>();
  const [login, { data, error: any }] = useLoginMutation();
  console.log(data);
  const onSubmit: SubmitHandler<TLogin> = async (data) => {
    const authInfo = {
      id: data.id,
      password: data.password,
    };

    const res = await login(authInfo).unwrap();
    const user = verifyToken(res.data.accesstoken);
    dispatch(setUser({ user: user, token: res.data.accesstoken }));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" {...register("id")} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" {...register("password")} />
          </div>
          <Button htmlType="submit">Login</Button>
        </div>
      </div>
    </form>
  );
};

export default Login;
