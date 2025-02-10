"use client"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { configurationActions } from "@/redux/slices/configurationSlice";
import { relationshipStatusActions } from "@/redux/slices/clientSlice";
import { deleteRelationshipStatus } from "@/redux/actions/configurationAction/client/relationshipStatus";
import { useRouter } from "next/navigation";

export const useDeleteRelationshipStatus = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter()
  
  const { status, data, error } = useSelector(
    (state) => state.relationshipStatus.deleteRelationshipStatus
  );

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setLoading(false);
      notification.success({
        message: "Success",
        description: `relationshipStatus deleted successfully `,
      });
      dispatch(relationshipStatusActions.clearDeleteRelationshipStatusError());
      dispatch(relationshipStatusActions.clearDeleteRelationshipStatusStatus());
      dispatch(configurationActions.resetDeleteConfigPopup());
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || `Failed to Delete RelationshipStatus`,
      });
      dispatch(relationshipStatusActions.clearDeleteRelationshipStatusStatus());
      dispatch(relationshipStatusActions.clearDeleteRelationshipStatusError());
    }
  }, [status, error, dispatch]);

  const handleDeleteRelationshipStatus = (relationshipStatusId, confirm = 'true', undo = 'false') => {
      dispatch(deleteRelationshipStatus(relationshipStatusId, confirm, undo));
  };

  return {loading, data, handleDeleteRelationshipStatus};
};
