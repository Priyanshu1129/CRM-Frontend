"use client";
import React, { useState } from "react";
import { Button, Form, Space, Grid, theme, Row, Col, Divider } from "antd";
import { FormHeader } from "@/components";
import { IndustrySelector, TerritorySelector } from "@/components";
import { useFetchLeadClients } from "@/hooks/lead/useFetchLeadClients";
import { Text } from "@/components";
import { CreateDeal } from "./create-lead";
import { colorConfig } from "@/config";

const AddLead = () => {
  const screens = Grid.useBreakpoint();
  const [territory, setTerritory] = useState(null);
  const [industry, setIndustry] = useState(null);
  const [form] = Form.useForm();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { loading, clients } = useFetchLeadClients({
    territory,
    industry,
  });

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
          // onFinish={() => {}}
        >
          {/* Section: Basic Information */}
          <Space>
            <Text style={{ color: colorConfig?.primary, fontWeight: "500" }}>
              Select Territory and Industry
            </Text>
          </Space>
          <Divider style={{ margin: "10px" }} />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <TerritorySelector
                name="territory"
                label="Territory"
                setInput={setTerritory}
                onClear={() => setTerritory(null)}
                // rules={opportunityFormRules.solution}
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <IndustrySelector
                name="industry"
                label="Industry"
                setInput={setIndustry}
                onClear={() => setIndustry(null)}
                // rules={opportunityFormRules.solution}
              />
            </Col>
          </Row>
        </Form>
        <CreateDeal loading={loading} clients={clients} />
      </Space>
    </div>
  );
};

export default AddLead;
