import { Form } from "antd";
import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormProps = {
  onSubmit: SubmitHandler<any>;
  children: ReactNode;
};

const UNForm = ({ onSubmit, children }: TFormProps) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default UNForm;
