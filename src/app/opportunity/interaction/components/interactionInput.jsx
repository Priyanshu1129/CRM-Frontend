import React from "react";
import { DeleteOutlined, PlusCircleTwoTone } from "@ant-design/icons";
import { Button, Form, Input, Col, Row } from "antd";
import { ContactSelector } from "@/components";
import { interactionFormRules } from "@/utilities/formValidationRules";

export const InputInteraction = ({
  contacts,
  buttonText = "Add Interaction",
}) => {
  return (
    <Form.List name="interactions">
      {(fields, { add, remove }, { errors }) => (
        <>
          {fields.map((field, index) => (
            <Col span={24} key={field.key}>
              <Form.Item>
                <Row>
                  <Col xs={24} sm={12} md={8} lg={6}>
                    <ContactSelector
                      field={field}
                      name={[field.name, "contact"]}
                      leadContacts={contacts}
                      leadPage={true}
                      label="Contact"
                      rules={interactionFormRules.contact}
                    />
                  </Col>
                </Row>
                <Row gutter={6}>
                  <Col span={20} key={field.key}>
                    <Form.Item
                      {...field}
                      name={[field.name, "conversation"]}
                      key={`${field.key}-interaction-input`}
                      validateTrigger={["onChange", "onBlur"]}
                      label="Interaction"
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message:
                            "Please input interaction name or remove this field.",
                        },
                      ]}
                      noStyle
                    >
                      <Input.TextArea
                        placeholder="Write interaction here"
                        rows={3}
                      />
                    </Form.Item>
                  </Col>
                  {fields.length >= 1 ? (
                    <Col span={4} key={`${field.key}-remove-button`}>
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
