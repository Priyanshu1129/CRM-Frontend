"use client"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { configurationActions } from "@/redux/slices/configurationSlice";
import { classificationActions } from "@/redux/slices/clientSlice";
import { deleteClassification } from "@/redux/actions/configurationAction/client/classification";
import { useRouter } from "next/navigation";

export const useDeleteClassification = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter()
  
  const { status, data, error } = useSelector(
    (state) => state.classification.deleteClassification
  );

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setLoading(false);
      notification.success({
        message: "Success",
        description: `classification deleted successfully `,
      });
      dispatch(classificationActions.clearDeleteClassificationError());
      dispatch(classificationActions.clearDeleteClassificationStatus());
      dispatch(configurationActions.resetDeleteConfigPopup());
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || `Failed to Delete Classification`,
      });
      dispatch(classificationActions.clearDeleteClassificationStatus());
      dispatch(classificationActions.clearDeleteClassificationError());
    }
  }, [status, error, dispatch]);

  const handleDeleteClassification = (classificationId, confirm = 'true', undo = 'false') => {
      dispatch(deleteClassification(classificationId, confirm, undo));
  };

  return {loading, data, handleDeleteClassification};
};
