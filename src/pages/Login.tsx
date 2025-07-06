/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button } from "antd";
import { SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/features/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import UNForm from "../components/form/UNForm";
import UNInput from "../components/form/UNInput";
type TLogin = {
  id: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
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
      toast.success("Logging in", { id: toastId, duration: 2000 });
      if (res?.data?.needsPasswordChange) {
        navigate("/password-change");
      } else {
        navigate(`/${user.role}/dashboard`);
      }
    } catch (err) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };
  return (
    <UNForm onSubmit={onSubmit}>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <UNInput type="text" name="id" label="ID"></UNInput>
          <UNInput type="text" name="password" label="Password"></UNInput>
          <Button htmlType="submit">Login</Button>
        </div>
      </div>
    </UNForm>
  );
};

export default Login;
