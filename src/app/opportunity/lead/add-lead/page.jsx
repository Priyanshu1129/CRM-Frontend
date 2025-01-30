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
  CurrencyAmountInput,
} from "@/components";
import { opportunityFormRules } from "@/utilities/formValidationRules";
import { useFetchLeadClients } from "@/hooks/lead/useFetchLeadClients";
import { Text } from "@/components";
import { CreateDeal } from "./create-lead";
import { colorConfig } from "@/config";

const AddDeal = () => {
  const screens = Grid.useBreakpoint();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { loading, clients, onFinish, form } = useFetchLeadClients({ Form });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%", // Full viewport height
      }}
    >
      <FormHeader
        listButton={true}
        listButtonText="Show All Leads"
        backButton={false}
        listButtonUrl="/opportunity/lead/all-leads"
      />
      <Space
        direction="vertical"
        style={{
          marginTop: "12px",
          width: "100%",
          background: colorConfig?.background || colorBgContainer,
          borderRadius: borderRadiusLG,
          padding: !screens.xs ? "24px" : "16px",
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
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              style={{ display: "flex", alignItems: "flex-end" }}
            >
              <Form.Item>
                <Space>
                  <Button loading={loading} type="primary" htmlType="submit">
                    Fetch Clients
                  </Button>
                </Space>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <CreateDeal loading={loading} clients={clients} />
      </Space>
    </div>
  );
};

export default AddDeal;
