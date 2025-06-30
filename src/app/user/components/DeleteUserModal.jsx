import React from "react";
import { Modal, Button, Typography } from "antd";
import {
  ExclamationCircleOutlined,
  DeleteOutlined,
  UndoOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useDeleteUser } from "@/hooks/user/useDeleteUser";
import { userActions } from "@/redux/slices/userSlice";

const { Text } = Typography;

const DeleteOrUndoUserModel = ({ undoMode }) => {
  const { open, user } = useSelector(
    (state) => state.user.deleteOrUndoUserPopup
  );
  const { loading, handleDeleteUser } = useDeleteUser(undoMode);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(userActions.setDeleteOrUndoUserPopup({ open: false, user: null }));
  };

  return (
    <Modal
      visible={open}
      title={
        <span>
          <ExclamationCircleOutlined
            style={{ color: "red", marginRight: "8px" }}
          />
          Confirm {undoMode ? "Undo" : "Delete"} Action
        </span>
      }
      onCancel={handleClose}
      footer={null}
      centered
    >
      <Text strong>
        Are you sure you want to {undoMode ? "undo " : "delete "}
        <span style={{ color: "#1890ff" }}>
          {user?.firstName} {user?.lastName}
        </span>
        ?
      </Text>
      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <Button
          onClick={handleClose}
          icon={<CloseOutlined />}
          style={{ marginRight: "10px" }}
        >
          Cancel
        </Button>
        <Button
          onClick={() =>
            handleDeleteUser(
              user?._id?.toString(),
              "true",
              undoMode ? "true" : "false"
            )
          }
          type="primary"
          danger
          loading={loading}
          icon={undoMode ? <UndoOutlined /> : <DeleteOutlined />}
        >
          {undoMode ? "Undo" : "Delete"}
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteOrUndoUserModel;
