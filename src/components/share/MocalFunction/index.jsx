import React from "react";
import { Modal, Input, Form, Button } from "antd";

const CustomModalFunction = ({
  visible,
  titleModal,
  onCancel,
  onSubmit,
  fields = [],
  initialValues = {},
}) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onSubmit(values);
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
  };

  // Hàm render từng trường dựa trên kiểu của nó
  const renderField = (field) => {
    const {
      name,
      type,
      label,
      placeholder,
      rules,
      rows,
      onChange: customOnChange, // callback onChange riêng (nếu có)
    } = field;

    // Nếu có callback onChange riêng thì tạo thêm prop để xử lý
    const inputProps = {};
    if (customOnChange) {
      inputProps.onChange = (e) => {
        // Gọi callback ngoài và cho phép antd Form quản lý giá trị
        customOnChange(e);
      };
    }

    return (
      <Form.Item key={name} name={name} label={label} rules={rules}>
        {type === "textarea" ? (
          <Input.TextArea
            style={{ maxHeight: 200 }}
            maxLength={255}
            name={name}
            placeholder={placeholder}
            rows={rows || 4}
            defaultValue={""}
            {...inputProps}
          />
        ) : type === "password" ? (
          <Input.Password
            name={name}
            placeholder={placeholder}
            {...inputProps}
          />
        ) : (
          <Input name={name} placeholder={placeholder} {...inputProps} />
        )}
      </Form.Item>
    );
  };

  return (
    <Modal
      title={titleModal}
      visible={visible}
      onCancel={onCancel}
      centered
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Hủy
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Xác nhận
        </Button>,
      ]}>
      <Form form={form} layout="vertical" initialValues={initialValues}>
        {fields.map((field) => renderField(field))}
      </Form>
    </Modal>
  );
};

export default CustomModalFunction;
