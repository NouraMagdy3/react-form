import React from 'react';
import { Input, Button, Form } from 'antd';
import { useForm, Controller } from 'react-hook-form';

// constants
const { Search } = Input;

const FormTwo = () => {

  // hooks 
  const { control, watch, handleSubmit } = useForm();
  console.log("🚀 ~ file: FormTwo.jsx ~ line 12 ~ FormTwo ~ control", control)
  const submit = data => console.log(data);
  const currentValues = watch();
  console.log("🚀 ~ file: FormTwo.jsx ~ line 15 ~ FormTwo ~ currentValues", currentValues)

  return (
    <div>
      <Form onSubmitCapture={handleSubmit(submit)}>
        <Controller
          name="login"
          control={control}
          render={({ field }) => (
            <Search
              placeholder="input search text"
              {...field}
            />
          )}
        />
        <Button   type="primary" htmlType='submit'>
          start search
        </Button>
      </Form>
    </div>
  )
}
export default FormTwo;
