"use client";
import React, { useEffect, useState } from "react";
import { Button, Form, Input, Space, Row, Col, Divider } from "antd";
import {
  ClientSelector,
  ContactSelector,
  CurrencyAmountInput,
} from "@/components";
import { opportunityFormRules } from "@/utilities/formValidationRules";
import { Text } from "@/components";
import { colorConfig } from "@/config";
import { useFetchLeadContacts } from "@/hooks/lead/useFetchLeadContacts";

export const CreateDeal = ({ clientLoading, clients }) => {
  const [client, setClient] = useState(null);
  const {
    loading: contactLoading,
    contacts,
    form,
  } = useFetchLeadContacts({ Form, client });

  const handleClientChange = (value) => {
    setClient(value);
    form.setFieldsValue({ contact: null }); // Reset the contact field to null when client changes
  };

  return (
    <Form layout="vertical" initialValues={{}} form={form} onFinish={() => {}}>
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
            // rules={opportunityFormRules.clientName}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <ContactSelector
            name="contact"
            label="Contact"
            leadContacts={contacts}
            leadPage={true}
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
            name="about"
            label="Brief about the opportunity"
            // rules={opportunityFormRules.stageClarification}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </Col>
        {/* </Row> */}

        {/* Section: Expected Date */}
        {/* <Space>
            <Text style={{ color: colorConfig?.primary, fontWeight: "500" }}>
              Opportunity Source
            </Text>
          </Space>
          <Divider style={{ margin: "10px" }} /> */}

        {/* <Row gutter={24}> */}
        <Col xs={24} sm={24} md={24} lg={24}>
          <Form.Item
            name="source"
            label="How did we receive this opportunity ?"
            // rules={opportunityFormRules.stageClarification}
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
      </Row>

      {/* Section: Actions */}
      <Row gutter={24}>
        <Col span={24}>
          <Form.Item>
            <Space>
              <Button loading={false} type="primary" htmlType="submit">
                Submit
              </Button>
              <Button
                type="default"
                htmlType="button"
                onClick={() => form.resetFields()}
                disabled={false}
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
