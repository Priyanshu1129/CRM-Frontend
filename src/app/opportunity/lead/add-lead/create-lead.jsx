"use client";
import React, { useEffect, useState } from "react";
import { Button, Form, Input, Space, Row, Col, Divider } from "antd";
import {
  ClientSelector,
  ContactSelector,
  CurrencyAmountInput,
  SolutionSelector,
} from "@/components";
import { leadFormRules } from "@/utilities/formValidationRules";
import { Text } from "@/components";
import { colorConfig } from "@/config";
import { useFetchLeadContacts, useAddLead } from "@/hooks/lead";

export const CreateDeal = ({ clientLoading, clients }) => {
  const [form] = Form.useForm();
  const [client, setClient] = useState(null);
  const { loading: contactLoading, contacts } = useFetchLeadContacts({
    form,
    client,
  });

  const handleClientChange = (value) => {
    setClient(value);
    form.setFieldsValue({ contact: null }); // Reset the contact field to null when client changes
  };

  const { onFinish, loading: createLeadLoading } = useAddLead();

  return (
    <Form layout="vertical" initialValues={{}} form={form} onFinish={onFinish}>
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
            label="Client Name"
            setInput={handleClientChange}
            rules={leadFormRules.client}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <ContactSelector
            name="contact"
            label="Contact"
            leadContacts={contacts}
            leadPage={true}
            rules={leadFormRules.contact}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <SolutionSelector name="solution" label="Solution" />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Form.Item
            name="projectName"
            label="Project Name"
            rules={leadFormRules.projectName}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      {/* Section: Sales Information */}
      <Space>
        <Text style={{ color: colorConfig?.primary, fontWeight: "500" }}>
          About Opportunity
        </Text>
      </Space>
      <Divider style={{ margin: "10px" }} />
      <Row gutter={24}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Form.Item
            name="description"
            label="Brief about the opportunity"
            rules={leadFormRules.about}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </Col>

        {/* <Row gutter={24}> */}
        <Col xs={24} sm={24} md={24} lg={24}>
          <Form.Item
            name="source"
            label="How did we receive this opportunity ?"
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
            name="potentialTopLine"
            label="Potential Top-Line"
            rules={leadFormRules.potentialTopLine}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <CurrencyAmountInput
            name="potentialOffset"
            label="Potential Offset"
            rules={leadFormRules.potentialOffset}
          />
        </Col>
      </Row>

      {/* Section: Actions */}
      <Row gutter={24}>
        <Col span={24}>
          <Form.Item>
            <Space>
              <Button
                loading={createLeadLoading}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
              <Button
                type="default"
                htmlType="button"
                onClick={() => form.resetFields()}
                disabled={createLeadLoading}
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
