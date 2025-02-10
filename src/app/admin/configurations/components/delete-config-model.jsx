import React from "react";
import { Modal, Button, Typography } from "antd";
import {
  ExclamationCircleOutlined,
  DeleteOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { configurationActions } from "@/redux/slices/configurationSlice";
import { useDeleteSolution } from "@/hooks/adminPanel/configurations/solution/useDeleteSolution";
import { useDeleteIndustry } from "@/hooks/adminPanel/configurations/industry/useDeleteIndustry";
import { useDeleteTerritory } from "@/hooks/adminPanel/configurations/territory/useDeleteTerritroy";
import { useDeleteSubIndustry } from "@/hooks/adminPanel/configurations/sub-industry/useDeleteSubIndustry";
import { useDeleteSubSolution } from "@/hooks/adminPanel/configurations/sub-solution/useDeleteSubSolution";
import { useDeleteClassification } from "@/hooks/adminPanel/configurations/client/classification/useDeleteClassification";
import { useDeleteIncorporationType } from "@/hooks/adminPanel/configurations/client/incorporationType/useDeleteIncorporationType";
import { useDeleteArcheType } from "@/hooks/adminPanel/configurations/contact/archType/useDeleteArcheType";
import { useDeleteRelationshipDegree } from "@/hooks/adminPanel/configurations/contact/relationshipDegree/useDeleteRelationshipDegree";
import { useDeleteRelationshipStatus } from "@/hooks/adminPanel/configurations/client/relationshipStatus/useDeleteRelationshipStatus";

const { Text } = Typography;

const DeleteConfigModal = () => {
  const dispatch = useDispatch();
  const { open, configData, configType } = useSelector(
    (state) => state.configuration.deleteConfigPopup
  );
  const description = `Are you sure you want to delete ${configType} : ${configData?.text}`;

  const { loading: l1, handleDeleteSolution } = useDeleteSolution();
  const { loading: l2, handleDeleteSubSolution } = useDeleteSubSolution();
  const { loading: l3, handleDeleteIndustry } = useDeleteIndustry();
  const { loading: l4, handleDeleteSubIndustry } = useDeleteSubIndustry();
  const { loading: l5, handleDeleteTerritory } = useDeleteTerritory();
  const { loading: l6, handleDeleteClassification } = useDeleteClassification();
  const { loading: l7, handleDeleteIncorporationType } =
    useDeleteIncorporationType();
  const { loading: l8, handleDeleteArcheType } = useDeleteArcheType();
  const { loading: l9, handleDeleteRelationshipDegree } =
    useDeleteRelationshipDegree();
  const { loading: l10, handleDeleteRelationshipStatus } =
    useDeleteRelationshipStatus();
  const loading = l1 || l2 || l3 || l4 || l5 || l6 || l7 || l8 || l9 || l10;

  const handleDelete = (configId) => {
    switch (configType) {
      case "solution":
        handleDeleteSolution(configId, "true", "false");
        break;

      case "sub-solution":
        handleDeleteSubSolution(configId, "true", "false");
        break;

      case "industry":
        handleDeleteIndustry(configId, "true", "false");
        break;

      case "sub-industry":
        handleDeleteSubIndustry(configId, "true", "false");
        break;

      case "territory":
        handleDeleteTerritory(configId, "true", "false");
        break;

      //client
      case "classification":
        handleDeleteClassification(configId, "true", "false");
        break;

      case "incorporation-type":
        handleDeleteIncorporationType(configId, "true", "false");
        break;

      case "relationship-status":
        handleDeleteRelationshipStatus(configId, "true", "false");
        break;

      //contact
      case "arche-type":
        handleDeleteArcheType(configId, "true", "false");
        break;

      case "relationship-degree":
        handleDeleteRelationshipDegree(configId, "true", "false");
        break;
    }
  };

  const handleClose = () => {
    dispatch(configurationActions.resetDeleteConfigPopup());
  };

  return (
    <Modal
      visible={open}
      title={
        <span>
          <ExclamationCircleOutlined
            style={{ color: "red", marginRight: "8px" }}
          />
          Confirm Deletion
        </span>
      }
      onCancel={handleClose}
      footer={null}
      centered
    >
      <Text strong>{description}</Text>
      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <Button
          onClick={handleClose}
          icon={<CloseOutlined />}
          style={{ marginRight: "10px" }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => handleDelete(configData?.value)}
          type="primary"
          danger
          loading={loading}
          icon={<DeleteOutlined />}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteConfigModal;
