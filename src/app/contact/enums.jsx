"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllArcheTypes,
  getAllRelationshipDegrees,
} from "@/redux/actions/contactAction";
import { Select, Form } from "antd";

export const ArcheTypeSelector = ({ label, name, rules }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { status, data, error } = useSelector(
    (state) => state.archeType.getAllArcheTypes
  );
  const [archeTypes, setArcheTypes] = useState(data?.data);

  const fetchAllArcheTypes = useCallback(() => {
    if (!archeTypes) {
      dispatch(getAllArcheTypes());
    }
  }, [dispatch, archeTypes]);

  useEffect(() => {
    fetchAllArcheTypes();
  }, [fetchAllArcheTypes]);
  let a = 0;
  useEffect(() => {
    if (status == "pending") {
      setLoading(true);
    } else if (status == "success" && data?.status == "success") {
      setArcheTypes(data?.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [status, data]);

  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Select
        showSearch
        loading={loading}
        optionFilterProp="children"
        filterOption={(input, option) =>
          option?.children?.toLowerCase().includes(input.toLowerCase())
        }
      >
        {archeTypes?.map((archeType, idx) => (
          <Select.Option key={idx} value={archeType._id}>
            {archeType.label}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export const RelationshipDegreeSelector = ({ label, name, rules }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { status, data, error } = useSelector(
    (state) => state.relationshipDegree.getAllRelationshipDegrees
  );
  const [relationshipDegrees, setRelationshipDegrees] = useState(data?.data);

  const fetchAllRelationshipDegrees = useCallback(() => {
    if (!relationshipDegrees) {
      dispatch(getAllRelationshipDegrees());
    }
  }, [dispatch, relationshipDegrees]);

  useEffect(() => {
    fetchAllRelationshipDegrees();
  }, [fetchAllRelationshipDegrees]);

  useEffect(() => {
    if (status == "pending") {
      setLoading(true);
    } else if (status == "success" && data?.status == "success") {
      setRelationshipDegrees(data?.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [status, data]);

  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Select
        loading={loading}
        showSearch
        optionFilterProp="children"
        filterOption={(input, option) =>
          option?.children?.toLowerCase().includes(input.toLowerCase())
        }
      >
        {relationshipDegrees?.map((relationshipDegree, idx) => (
          <Select.Option key={idx} value={relationshipDegree._id}>
            {relationshipDegree.label}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};
