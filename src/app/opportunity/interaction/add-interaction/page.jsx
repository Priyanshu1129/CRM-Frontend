"use client";
import React from "react";
import { Button, Form, Space, Grid, theme, Row, Col, Divider } from "antd";
import { IndustrySelector, TerritorySelector } from "@/components";
import { Text } from "@/components";
import { InteractionForm } from "./interaction";
import { colorConfig } from "@/config";
import { useFetchInteractionClients } from "@/hooks/interaction";

const AddInteraction = () => {
  const screens = Grid.useBreakpoint();
  const [form] = Form.useForm();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { loading, clients, onFinish } = useFetchInteractionClients({
    form,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%", // Full viewport height
      }}
    >
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
              Select Territory and Industry
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
        <InteractionForm loading={loading} clients={clients} />
      </Space>
    </div>
  );
};

export default AddInteraction;
