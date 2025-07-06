import { Button } from "antd";
import UNForm from "../components/form/UNForm";
import UNInput from "../components/form/UNInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useChangePasswordMutation } from "../redux/features/admin/userManagementApi";
import { TResponse } from "../types/global";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/auth/authSlice";

const NeedPasswordChange = () => {
  const [changePassword] = useChangePasswordMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = (await changePassword(data)) as TResponse<any>;
    if (res?.data?.success) {
      dispatch(logout());
      toast.success("Password Change successfully!");
      navigate("/login");
    } else {
      toast.error(res?.data?.data?.error?.message);
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
          <UNInput
            type="text"
            name="oldPassword"
            label="Old Password"
          ></UNInput>
          <UNInput
            type="text"
            name="newPassword"
            label="New Password"
          ></UNInput>
          <Button htmlType="submit">Save</Button>
        </div>
      </div>
    </UNForm>
  );
};

export default NeedPasswordChange;
