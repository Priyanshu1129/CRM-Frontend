// "use client";
// import React, { useState } from "react";
// import {
//   Button,
//   Form,
//   Input,
//   Space,
//   Grid,
//   theme,
//   Row,
//   Col,
//   DatePicker,
// } from "antd";

// import {
//   ContactSelector,
//   UserSelector,
//   ClientSelector,
//   FormHeader,
//   InputNotes,
// } from "@/components";
// import { RegistrationStatusSelector } from "../enums";
// import { registrationFormRules } from "../../../utilities/formValidationRules";
// import { useAddRegistration } from "@/hooks/registration";

// const AddRegistration = () => {
//   const screens = Grid.useBreakpoint();
//   const [form] = Form.useForm();

//   const { loading, onFinish } = useAddRegistration();

//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   return (
//     <>
//       <FormHeader backButtonText={"Return"} />
//       <Space
//         direction="vertical"
//         style={{
//           marginTop: "28px",
//           width: "100%",
//           background: colorBgContainer,
//           borderRadius: borderRadiusLG,
//           padding: !screens.xs ? "32px" : "16px",
//         }}
//       >
//         <Form
//           layout="vertical"
//           form={form}
//           onFinish={onFinish}
//           // size={"default"}
//         >
//           <Row gutter={24}>
//             <Col span={8}>
//               <ClientSelector
//                 name="client"
//                 label="Client Name"
//                 rules={registrationFormRules.clientName}
//               />
//             </Col>
//             <Col span={8}>
//               <UserSelector
//                 name="registrationChamp"
//                 label="Registration Champ"
//                 rules={registrationFormRules.registrationChamp}
//               />
//             </Col>
//             <Col span={8}>
//               <RegistrationStatusSelector
//                 name="status"
//                 label="Registration Status"
//                 rules={registrationFormRules.registrationStatus}
//               />
//             </Col>
//             <Col span={8}>
//               <Form.Item
//                 name="link"
//                 label="Website Link"
//                 rules={registrationFormRules.websiteLink}
//               >
//                 <Input />
//               </Form.Item>
//             </Col>
//             <Col span={8}>
//               <Form.Item
//                 name="username"
//                 label="Registered Username"
//                 rules={registrationFormRules.registeredUsername}
//               >
//                 <Input />
//               </Form.Item>
//             </Col>
//             <Col span={8}>
//               <Form.Item
//                 name="password"
//                 label="Registered Password"
//                 rules={registrationFormRules.registeredPassword}
//               >
//                 <Input.Password />
//               </Form.Item>
//             </Col>
//             <Col span={8}>
//               <Form.Item
//                 name="otherDetails"
//                 label="Other Details"
//                 rules={registrationFormRules.otherDetails}
//               >
//                 <Input />
//               </Form.Item>
//             </Col>
//             <Col span={8}>
//               <Form.Item
//                 name="registrationDate"
//                 label="Registration Date"
//                 rules={registrationFormRules.registrationDate}
//               >
//                 <DatePicker style={{ width: "100%" }} />
//               </Form.Item>
//             </Col>
//             <Col span={8}>
//               <Form.Item
//                 name="expiryDate"
//                 label="Valid Until"
//                 rules={registrationFormRules.validUntil}
//               >
//                 <DatePicker style={{ width: "100%" }} />
//               </Form.Item>
//             </Col>
//             <Col span={8}>
//               <ContactSelector
//                 name="primaryContact"
//                 label="Primary Registration Contact"
//                 rules={registrationFormRules.primaryRegistrationContact}
//               />
//             </Col>
//             <Col span={8}>
//               <Form.Item
//                 name="submittedDocuments"
//                 label="Submitted Documents"
//                 rules={registrationFormRules.submittedDocuments}
//               >
//                 <Input />
//               </Form.Item>
//             </Col>
//             <Col span={24}>
//               <Form.Item name="notes" label="Notes">
//                 <InputNotes />
//               </Form.Item>
//             </Col>
//             <Col span={24}>
//               <Form.Item>
//                 <Space>
//                   <Button type="primary" htmlType="submit" loading={loading}>
//                     Submit
//                   </Button>
//                   <Button
//                     type="default"
//                     htmlType="button"
//                     onClick={() => form.resetFields()}
//                     disabled={loading}
//                   >
//                     Reset
//                   </Button>
//                 </Space>
//               </Form.Item>
//             </Col>
//           </Row>
//         </Form>
//       </Space>
//     </>
//   );
// };
// export default AddRegistration;

"use client";
import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Space,
  Grid,
  theme,
  Row,
  Col,
  DatePicker,
  Divider,
} from "antd";
import { colorConfig } from "@/config";
import { Text } from "@/components";
import {
  ContactSelector,
  UserSelector,
  ClientSelector,
  FormHeader,
  InputNotes,
} from "@/components";
import { RegistrationStatusSelector } from "../enums";
import { registrationFormRules } from "../../../utilities/formValidationRules";
import { useAddRegistration } from "@/hooks/registration";

const AddRegistration = () => {
  const screens = Grid.useBreakpoint();
  const [form] = Form.useForm();

  const { loading, onFinish } = useAddRegistration();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Define dynamic span for different screen sizes
  const colSpan = {
    xs: 24, // 1 field per row on mobile
    sm: 12, // 2 fields per row on small tablets
    md: 8,
    lg: 6, // 4 fields per row on desktop and larger
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%", // Full viewport height
      }}
    >
      <FormHeader backButtonText={"Return"} />
      <Space
        direction="vertical"
        style={{
          marginTop: "24px",
          width: "100%",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          padding: !screens.xs ? "32px" : "16px",
          // flex: "1", // Takes remaining space below header
          overflow: "scroll", // Prevent overflow
          scrollbarWidth: "none",
        }}
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          {/* Client Info Section */}
          <Space>
            <Text style={{ color: colorConfig?.primary, fontWeight: "500" }}>
              Client Info
            </Text>
          </Space>
          <Divider style={{ margin: "10px" }} />
          <Row gutter={24}>
            <Col {...colSpan}>
              <ClientSelector
                name="client"
                label="Client Name"
                rules={registrationFormRules.clientName}
              />
            </Col>
            <Col {...colSpan}>
              <UserSelector
                name="registrationChamp"
                label="Registration Champ"
                rules={registrationFormRules.registrationChamp}
              />
            </Col>
            <Col {...colSpan}>
              <RegistrationStatusSelector
                name="status"
                label="Registration Status"
                rules={registrationFormRules.registrationStatus}
              />
            </Col>
            <Col {...colSpan}>
              <Form.Item
                name="link"
                label="Website Link"
                rules={registrationFormRules.websiteLink}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          {/* Registration Credentials Section */}

          <Space>
            <Text style={{ color: colorConfig?.primary, fontWeight: "500" }}>
              Registration Credentials
            </Text>
          </Space>
          <Divider style={{ margin: "10px" }} />
          <Row gutter={24}>
            <Col {...colSpan}>
              <Form.Item
                name="username"
                label="Registered Username"
                rules={registrationFormRules.registeredUsername}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col {...colSpan}>
              <Form.Item
                name="password"
                label="Registered Password"
                rules={registrationFormRules.registeredPassword}
              >
                <Input.Password />
              </Form.Item>
            </Col>
            <Col {...colSpan}>
              <Form.Item
                name="otherDetails"
                label="Other Details"
                rules={registrationFormRules.otherDetails}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          {/* Dates Section */}
          <Space>
            <Text style={{ color: colorConfig?.primary, fontWeight: "500" }}>
              Dates
            </Text>
          </Space>
          <Divider style={{ margin: "10px" }} />
          <Row gutter={24}>
            <Col {...colSpan}>
              <Form.Item
                name="registrationDate"
                label="Registration Date"
                rules={registrationFormRules.registrationDate}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col {...colSpan}>
              <Form.Item
                name="expiryDate"
                label="Valid Until"
                rules={registrationFormRules.validUntil}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>

          {/* Contact Info Section */}
          <Space>
            <Text style={{ color: colorConfig?.primary, fontWeight: "500" }}>
              Contact Information
            </Text>
          </Space>
          <Divider style={{ margin: "10px" }} />

          <Row gutter={24}>
            <Col {...colSpan}>
              <ContactSelector
                name="primaryContact"
                label="Primary Registration Contact"
                rules={registrationFormRules.primaryRegistrationContact}
              />
            </Col>
            <Col {...colSpan}>
              <Form.Item
                name="submittedDocuments"
                label="Submitted Documents"
                rules={registrationFormRules.submittedDocuments}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          {/* Notes Section */}
          <Space>
            <Text style={{ color: colorConfig?.primary, fontWeight: "500" }}>
              Notes
            </Text>
          </Space>
          <Divider style={{ margin: "10px" }} />
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item name="notes" label="Notes">
                <InputNotes />
              </Form.Item>
            </Col>
          </Row>

          {/* Form Action Buttons */}
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item>
                <Space>
                  <Button type="primary" htmlType="submit" loading={loading}>
                    Submit
                  </Button>
                  <Button
                    type="default"
                    htmlType="button"
                    onClick={() => form.resetFields()}
                    disabled={loading}
                  >
                    Reset
                  </Button>
                </Space>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Space>
    </div>
  );
};

export default AddRegistration;
