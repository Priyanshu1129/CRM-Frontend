import React from "react";
import {
  ArrowLeftOutlined,
  EyeOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Grid } from "antd";
import { useRouter } from "next/navigation";
import { Text } from "./text";

export const FormHeader = ({
  fileUpload = false,
  backButtonText = "",
  backButton = true,
  listButtonText = "Show All",
  listButtonUrl = null,
  listButton = false,
  setUploadModal,
}) => {
  const screens = Grid.useBreakpoint();
  const router = useRouter();

  const BackButton = () => (
    <Button
      icon={<ArrowLeftOutlined />}
      onClick={() => {
        router.back();
      }}
      style={{
        marginTop: screens.xs ? "1.6rem" : "0rem",
      }}
    >
      <Text
        style={{
          //   color: "#fff",
          fontSize: "16px",
          fontWeight: 400,
        }}
      >
        {!screens.xs ? backButtonText : null}
      </Text>
    </Button>
  );

  const ListButton = () => (
    <Button
      icon={<EyeOutlined />}
      type="primary"
      onClick={() => {
        if (listButtonUrl) router.push(listButtonUrl);
      }}
      style={{
        marginTop: screens.xs ? "1.6rem" : "0rem",
      }}
    >
      {!screens.xs ? listButtonText : null}
    </Button>
  );

  const UploadButton = () => (
    <Button
      disabled
      icon={<UploadOutlined />}
      type="primary"
      onClick={() => setUploadModal(true)}
      style={{
        marginTop: screens.xs ? "1.6rem" : "0rem",
      }}
    >
      Bulk Upload
    </Button>
  );

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {backButton && <BackButton />}
      {listButton && <ListButton />}
      {fileUpload && <UploadButton />}
    </div>
  );
};
