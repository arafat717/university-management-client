import { DatePicker, Form } from "antd";
import dayjs from "dayjs";
import { Controller } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label?: string;
};

const UNDatePicker = ({ name, label }: TDatePickerProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <DatePicker
              id={name}
              value={field.value ? dayjs(field.value) : null} // Convert ISO string to dayjs
              onChange={(date) => {
                // Save ISO string like "2025-06-04T18:00:00.000Z"
                field.onChange(date ? date.toDate().toISOString() : "");
              }}
              size="large"
              style={{ width: "100%" }}
            />
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default UNDatePicker;
