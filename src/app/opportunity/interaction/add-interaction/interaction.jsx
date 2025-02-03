"use client";
import React, { useState } from "react";
import { Button, Form, Input, Space, Row, Col, Divider } from "antd";
import {
  ClientSelector,
  CurrencyAmountInput,
  LeadSelector,
} from "@/components";
import { interactionFormRules } from "@/utilities/formValidationRules";
import { Text } from "@/components";
import { colorConfig } from "@/config";
import { InputInteraction } from "../components";
import { useFetchLeadContacts } from "@/hooks/lead";
import {
  useFetchClientAllLeads,
  useUpdateInteraction,
} from "@/hooks/interaction";

export const InteractionForm = ({ clients, loading: clientsLoading }) => {
  const [form] = Form.useForm();
  const [client, setClient] = useState(null);
  const [interactionId, setInteractionId] = useState(null);

  const { loading: contactLoading, contacts } = useFetchLeadContacts({
    form,
    client,
  });

  const { loading: leadsLoading, clientAllLeads } = useFetchClientAllLeads({
    client,
    form,
  });

  const { loading: updateLoading, handleUpdate } = useUpdateInteraction({
    interactionId,
  });

  const handleClientChange = (value) => {
    setClient(value);
    form.setFieldsValue({ contact: null }); // Reset the contact field to null when client changes
  };

  const handleLeadChange = (value) => {
    const lead = clientAllLeads.find((lead) => lead?._id.toString() == value);
    console.log("lead", lead);
    setInteractionId(lead?.interaction?._id);
    form.setFieldsValue({
      leadCustomId: lead?.customId,
      description: lead?.description,
      potentialTopLine: lead?.potentialTopLine,
      potentialOffset: lead?.potentialOffset,
      potentialRevenue: lead?.potentialRevenue,
      interactions: lead?.interaction?.interactions,
    });
  };

  const onClear = (clear) => {
    switch (clear) {
      case "client":
        form.setFieldsValue({
          client: null,
          lead: null,
          leadCustomId: null,
          description: null,
          potentialTopLine: null,
          potentialOffset: null,
          potentialRevenue: null,
          interactions: null,
        });
        break;

      case "lead":
        form.setFieldsValue({
          lead: null,
          leadCustomId: null,
          description: null,
          potentialTopLine: null,
          potentialOffset: null,
          potentialRevenue: null,
          interactions: null,
        });
        break;

      default:
        break;
    }
  };

  return (
    <Form
      layout="vertical"
      initialValues={{}}
      form={form}
      onFinish={handleUpdate}
    >
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
            leadClients={clients}
            leadPage={true}
            onClear={() => onClear("client")}
            label="Client Name"
            setInput={handleClientChange}
            rules={interactionFormRules.client}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <LeadSelector
            name="lead"
            clientAllLeads={clientAllLeads}
            interactionPage={true}
            onClear={() => onClear("lead")}
            label="Project Name"
            setInput={handleLeadChange}
            rules={interactionFormRules.projectName}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Form.Item
            name="leadCustomId"
            label="Lead"
            // rules={interactionFormRules.leadCustomId}
          >
            <Input disabled />
          </Form.Item>
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
            name="description"
            label="Brief about the opportunity"
            // rules={interactionFormRules.about}
          >
            <Input.TextArea disabled rows={4} />
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
          <Form.Item name="interactions">
            <InputInteraction
              contacts={contacts}
              buttonText={"Add Interaction"}
            />
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
            name="potentialTopLine"
            label="Potential Top-Line"
            // rules={interactionFormRules.potentialTopLine}
            disabled={true}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CurrencyAmountInput
            name="potentialOffset"
            label="Potential Offset"
            // rules={interactionFormRules.potentialOffset}
            disabled={true}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CurrencyAmountInput
            name="potentialRevenue"
            label="Potential Revenue"
            disabled={true}
          />
        </Col>
      </Row>

      {/* Section: Actions */}
      <Row gutter={24}>
        <Col span={24}>
          <Form.Item>
            <Space>
              <Button loading={updateLoading} type="primary" htmlType="submit">
                Submit
              </Button>
              <Button
                type="default"
                htmlType="button"
                onClick={() => form.resetFields()}
                disabled={updateLoading}
              >
                Reset
              </Button>
            </Space>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
