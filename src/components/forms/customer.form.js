import { Form, Input, Button } from "antd";

function CustomerForm({
  isLoading,
  handleSubmit
 }) {
  const initialValues = {
    name: "",
    address: "",
    phone: "",
    email: "",
  };

  const handleOnFinish = (values) => {
    handleSubmit(values);
  };

  const handleOnFinishFailed = () => {};

  return (
    <Form
      name="customer"
      initialValues={initialValues}
      onFinish={handleOnFinish}
      onFinishFailed={handleOnFinishFailed}
      autoComplete="off"
      labelCol={{
        span: 2,
      }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Name is mandatory!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: "Address is mandatory!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Phone" name="phone">
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Email is mandatory!"
          },
          {
            type: "email",
            message: "It's not valid email"
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 2,
        }}
      >
        <Button loading={isLoading} type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CustomerForm;
