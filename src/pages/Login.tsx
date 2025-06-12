/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "antd";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/features/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
type TLogin = {
  id: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<TLogin>();
  const [login, { data, error: any }] = useLoginMutation();
  console.log(data);
  const onSubmit: SubmitHandler<TLogin> = async (data) => {
    const toastId = toast.loading("Logging in");
    const authInfo = {
      id: data.id,
      password: data.password,
    };

    try {
      const res = await login(authInfo).unwrap();
      const user = verifyToken(res.data.accesstoken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accesstoken }));
      navigate(`/${user.role}/dashboard`);
      toast.success("Logging in", { id: toastId, duration: 2000 });
    } catch (err) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
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
