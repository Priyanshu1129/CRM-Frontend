"use client"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { configurationActions } from "@/redux/slices/configurationSlice";
import { incorporationTypeActions } from "@/redux/slices/clientSlice";
import { deleteIncorporationType } from "@/redux/actions/configurationAction/client/incorporationType";
import { useRouter } from "next/navigation";

export const useDeleteIncorporationType = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter()
  
  const { status, data, error } = useSelector(
    (state) => state.incorporationType.deleteIncorporationType
  );

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setLoading(false);
      notification.success({
        message: "Success",
        description: `incorporationType deleted successfully `,
      });
      dispatch(incorporationTypeActions.clearDeleteIncorporationTypeError());
      dispatch(incorporationTypeActions.clearDeleteIncorporationTypeStatus());
      dispatch(configurationActions.resetDeleteConfigPopup());
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || `Failed to Delete IncorporationType`,
      });
      dispatch(incorporationTypeActions.clearDeleteIncorporationTypeStatus());
      dispatch(incorporationTypeActions.clearDeleteIncorporationTypeError());
    }
  }, [status, error, dispatch]);

  const handleDeleteIncorporationType = (incorporationTypeId, confirm = 'true', undo = 'false') => {
      dispatch(deleteIncorporationType(incorporationTypeId, confirm, undo));
  };

  return {loading, data, handleDeleteIncorporationType};
};
