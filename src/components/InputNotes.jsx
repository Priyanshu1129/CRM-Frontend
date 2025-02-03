import React from "react";
import { DeleteOutlined, PlusCircleTwoTone } from "@ant-design/icons";
import { Button, Form, Input, Col, Row } from "antd";

export const InputNotes = ({ buttonText = "Add Notes" }) => {
  return (
    <Form.List name="notes">
      {(fields, { add, remove }, { errors }) => (
        <>
          {fields.map((field, index) => (
            <Col span={24} key={field.key}>
              <Form.Item required={false}>
                <Row gutter={6}>
                  <Col span={20} key={field.key}>
                    <Form.Item
                      {...field}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          whitespace: true,
                          message:
                            "Please input note's name or delete this field.",
                        },
                      ]}
                      noStyle
                    >
                      <Input.TextArea rows={3} />
                    </Form.Item>
                  </Col>
                  {fields.length >= 1 ? (
                    <Col span={4} key={field.key}>
                      <Button
                        onClick={() => remove(field.name)}
                        icon={<DeleteOutlined />}
                        className="dynamic-delete-button"
                        danger
                      >
                        Remove
                      </Button>
                    </Col>
                  ) : null}
                </Row>
              </Form.Item>
            </Col>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              icon={<PlusCircleTwoTone />}
            >
              {buttonText}
            </Button>
            {/* <Button
              type="dashed"
              onClick={() => {
                add("The head item", 0);
              }}
              style={{
                width: "60%",
                marginTop: "20px",
              }}
              icon={<PlusOutlined />}
            >
              Add field at head
            </Button> */}
            <Form.ErrorList errors={errors} />
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};
