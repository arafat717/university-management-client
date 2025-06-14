import { Input } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const UNInput = ({ type, name, label }: TInputProps) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input type={type} id={name} {...field}></Input>}
      />
    </div>
  );
};

export default UNInput;
