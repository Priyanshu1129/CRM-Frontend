"use client";
import React, { useState } from "react";
import {
  Button,
  Input,
  Space,
  Grid,
  theme,
  Row,
  Form,
  Col,
  DatePicker,
  Divider,
} from "antd";
import { FormHeader, BulkUploadModal } from "@/components";
import { RevenueInput } from "../components/revenueInput";
import {
  SolutionSelector,
  SubSolutionSelector,
  SalesStageSelector,
  SalesSubStageSelector,
  UserSelector,
  ClientSelector,
  TenderSelector,
  CurrencyAmountInput,
} from "@/components";
import {
  opportunityFormRules,
  tenderFormRules,
} from "@/utilities/formValidationRules";
import { useAddOpportunity } from "@/hooks/deal";
import { Text } from "@/components";
import { colorConfig } from "@/config";

const AddDeal = () => {
  const [uploadModal, setUploadModal] = useState(false);
  const screens = Grid.useBreakpoint();
  const [form] = Form.useForm();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { loading, onFinish } = useAddOpportunity({ form });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%", // Full viewport height
      }}
    >
      <FormHeader
        fileUpload={true}
        setUploadModal={setUploadModal}
        backButtonText={"Return"}
      />
      <Space
        direction="vertical"
        style={{
          marginTop: "24px",
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
          onFinish={onFinish}
        >
          {/* Section: Basic Information */}
          <Space>
            <Text style={{ color: colorConfig?.primary, fontWeight: "500" }}>
              Basic Information
            </Text>
          </Space>
          <Divider style={{ margin: "10px" }} />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item name="entryDate" label="Entry Date">
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <ClientSelector
                name="client"
                label="Client Name"
                rules={opportunityFormRules.clientName}
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item
                name="partneredWith"
                label="In Partnership"
                rules={opportunityFormRules.partneredWith}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          {/* Section: Project & Tender Details */}
          <Space>
            <Text style={{ color: colorConfig?.primary, fontWeight: "500" }}>
              Project & Tender Details
            </Text>
          </Space>
          <Divider style={{ margin: "10px" }} />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item
                name="projectName"
                label="Project Name"
                rules={opportunityFormRules.projectName}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <TenderSelector
                name="associatedTender"
                label="Associated Tender"
                disabled={true}
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <SolutionSelector
                name="solution"
                label="Solution"
                rules={opportunityFormRules.solution}
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <SubSolutionSelector
                name="subSolution"
                label="Sub Solution"
                rules={opportunityFormRules.subSolution}
              />
            </Col>
          </Row>

          {/* Section: Sales Information */}
          <Space>
            <Text style={{ color: colorConfig?.primary, fontWeight: "500" }}>
              Sales Information
            </Text>
          </Space>
          <Divider style={{ margin: "10px" }} />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <UserSelector
                name="salesChamp"
                label="Sales Champ"
                rules={opportunityFormRules.salesChamp}
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <SalesStageSelector
                name="salesStage"
                label="Sales Stage"
                rules={opportunityFormRules.salesStage}
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <SalesSubStageSelector
                name="salesSubStage"
                label="Sales Sub Stage"
                rules={opportunityFormRules.salesSubStage}
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item
                name="stageClarification"
                label="Stage Clarification"
                rules={opportunityFormRules.stageClarification}
              >
                <Input />
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
            <Col span={24}>
              <RevenueInput rules={opportunityFormRules.revenue} />
            </Col>
          </Row>

          {/* Section: Expected Date */}
          <Space>
            <Text style={{ color: colorConfig?.primary, fontWeight: "500" }}>
              Expected Date
            </Text>
          </Space>
          <Divider style={{ margin: "10px" }} />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item
                name="expectedWonDate"
                label="Expected Won Date"
                rules={tenderFormRules.bondIssueDate}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
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
        <BulkUploadModal
          setUploadModal={setUploadModal}
          uploadModal={uploadModal}
          resource="opportunity"
        />
      </Space>
    </div>
  );
};

export default AddDeal;
