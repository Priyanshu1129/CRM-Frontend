"use client";

import { Select } from "antd";

export const DeletedItemButton = ({ buttonText, setShowDeletedItems }) => {
  return (
    <Select
      style={{ width: "170px" }}
      defaultValue={false}
      onChange={(value) => setShowDeletedItems(value)}
    >
      <Select.Option value={false}>Active {buttonText}</Select.Option>
      <Select.Option value={true}>Deleted {buttonText}</Select.Option>
    </Select>
  );
};
