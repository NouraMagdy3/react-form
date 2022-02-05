import React from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Button, Checkbox } from 'antd';

import './formOne.css';
function FormOne() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    console.log("🚀 ~ file: FormOne.jsx ~ line 8 ~ FormOne ~ errors", errors)
    const onSubmit = data => console.log(data);
    const currentValues = watch();

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        // /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        // <form className="form" onSubmit={handleSubmit(onSubmit)}>
        //     {/* register your input into the hook by invoking the "register" function */}
        //     <Input  {...register("email", { required: true })} />
        //     {errors.email && <span>This field is required</span>}
        //     {/* include validation with required or other standard HTML validation rules */}
        //     <Input type="password" {...register("password", { required: true })} />
        //     {/* errors will return when field validation fails  */}
        //     {errors.password && <span>This field is required</span>}

        //     <Input type="submit" />
        // </form>
        <div className="formTwo">

            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                onSubmitCapture={handleSubmit(onSubmit)}
            >
                <Form.Item
                    label="Email"
                    name="Email"
                    rules={[{ required: true, message: errors.email && 'Username is required' }]}
                >
                    <Input  {...register("email", { required: true })} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: errors.password && 'Password is required', min: 6 }]}
                >
                    <Input.Password {...register("password", { required: true, min: 6 })} />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default FormOne;