"use client"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { configurationActions } from "@/redux/slices/configurationSlice";
import { archeTypeActions } from "@/redux/slices/contactSlice";
import { deleteArcheType } from "@/redux/actions/contactAction";
import { useRouter } from "next/navigation";

export const useDeleteArcheType = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter()
  
  const { status, data, error } = useSelector(
    (state) => state.archeType.deleteArcheType
  );

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setLoading(false);
      notification.success({
        message: "Success",
        description: `archeType deleted successfully `,
      });
      dispatch(archeTypeActions.clearDeleteArcheTypeError());
      dispatch(archeTypeActions.clearDeleteArcheTypeStatus());
      dispatch(configurationActions.resetDeleteConfigPopup());
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || `Failed to Delete ArcheType`,
      });
      dispatch(archeTypeActions.clearDeleteArcheTypeStatus());
      dispatch(archeTypeActions.clearDeleteArcheTypeError());
    }
  }, [status, error, dispatch]);

  const handleDeleteArcheType = (archeTypeId, confirm = 'true', undo = 'false') => {
      dispatch(deleteArcheType(archeTypeId, confirm, undo));
  };

  return {loading, data, handleDeleteArcheType};
};
