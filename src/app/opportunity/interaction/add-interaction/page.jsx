"use client";
import React from "react";
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
import { FormHeader } from "@/components";
import { RevenueInput } from "../components/revenueInput";
import {
  SolutionSelector,
  IndustrySelector,
  TerritorySelector,
  SubSolutionSelector,
  SalesStageSelector,
  SalesSubStageSelector,
  UserSelector,
  ClientSelector,
  ContactSelector,
  TenderSelector,
  CurrencyAmountInput,
} from "@/components";
import {
  opportunityFormRules,
  tenderFormRules,
} from "@/utilities/formValidationRules";
import { useAddOpportunity } from "@/hooks/deal";
import { Text, InputNotes } from "@/components";
import { colorConfig } from "@/config";

const AddInteraction = () => {
  const [form] = Form.useForm();
  const screens = Grid.useBreakpoint();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { loading, onFinish } = useAddOpportunity();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%", // Full viewport height
      }}
    >
      {/* <FormHeader
        listButton={true}
        listButtonText="Show All Interactions"
        backButton={false}
        listButtonUrl="/opportunity/interaction/all-interactions"
      /> */}
      <Space
        direction="vertical"
        style={{
          // marginTop: "24px",
          width: "100%",
          background: colorConfig?.background || colorBgContainer,
          borderRadius: borderRadiusLG,
          padding: !screens.xs ? "32px" : "16px",
          // flex: "1", // Takes remaining space below header
          overflow: "scroll", // Prevent overflow
          scrollbarWidth: "none",
        }}
      >
        <Form
          layout="vertical"
          initialValues={{}}
          form={form}
          onFinish={() => {}}
        >
          {/* Section: Basic Information */}
          <Space>
            <Text style={{ color: colorConfig?.primary, fontWeight: "500" }}>
              Select SIT
            </Text>
          </Space>
          <Divider style={{ margin: "10px" }} />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <TerritorySelector
                name="territory"
                label="Territory"
                // rules={opportunityFormRules.solution}
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <IndustrySelector
                name="industry"
                label="Industry"
                // rules={opportunityFormRules.solution}
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <SolutionSelector
                name="solution"
                label="Solution"
                // rules={opportunityFormRules.solution}
              />
            </Col>
          </Row>

          {/* Section: Project & Tender Details */}
          <Space>
            <Text style={{ color: colorConfig?.primary, fontWeight: "500" }}>
              Client Details
            </Text>
          </Space>
          <Divider style={{ margin: "10px" }} />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <ClientSelector
                name="client"
                label="Client Name"
                // rules={opportunityFormRules.clientName}
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item
                name="projectName"
                label="Project Name"
                // rules={opportunityFormRules.projectName}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <ContactSelector
                name="contact"
                label="Contact"
                // rules={opportunityFormRules.clientName}
              />
            </Col>
          </Row>

          {/* Section: Sales Information */}
          <Space>
            <Text style={{ color: colorConfig?.primary, fontWeight: "500" }}>
              About
            </Text>
          </Space>
          <Divider style={{ margin: "10px" }} />
          <Row gutter={24}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Form.Item
                name="about"
                label="Brief about the opportunity"
                // rules={opportunityFormRules.stageClarification}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>

          {/* Section: Expected Date */}
          <Space>
            <Text style={{ color: colorConfig?.primary, fontWeight: "500" }}>
              Client Interactions
            </Text>
          </Space>
          <Divider style={{ margin: "10px" }} />

          <Row gutter={24}>
            <Col span={24}>
              <Form.Item name="interaction" label="Interaction">
                <InputNotes buttonText={"Add Interaction"} />
              </Form.Item>
            </Col>
          </Row>

          {/* Section: Financial Information */}
          <Space>
            <Text style={{ color: colorConfig?.primary, fontWeight: "500" }}>
              Financial Information
            </Text>
          </Space>
          <Divider style={{ margin: "10px" }} />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <CurrencyAmountInput
                name="salesTopLine"
                label="Sales Top-Line"
                rules={opportunityFormRules.salesTopLine}
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <CurrencyAmountInput
                name="offsets"
                label="Offsets"
                rules={opportunityFormRules.offsets}
              />
            </Col>
          </Row>

          {/* Section: Actions */}
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item>
                <Space>
                  <Button loading={loading} type="primary" htmlType="submit">
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

export default AddInteraction;
