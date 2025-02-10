"use client"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { configurationActions } from "@/redux/slices/configurationSlice";
import { relationshipDegreeActions } from "@/redux/slices/contactSlice";
import { deleteRelationshipDegree } from "@/redux/actions/contactAction";
import { useRouter } from "next/navigation";

export const useDeleteRelationshipDegree = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter()
  
  const { status, data, error } = useSelector(
    (state) => state.relationshipDegree.deleteRelationshipDegree
  );

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setLoading(false);
      notification.success({
        message: "Success",
        description: `relationshipDegree deleted successfully `,
      });
      dispatch(relationshipDegreeActions.clearDeleteRelationshipDegreeError());
      dispatch(relationshipDegreeActions.clearDeleteRelationshipDegreeStatus());
      dispatch(configurationActions.resetDeleteConfigPopup());
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || `Failed to Delete RelationshipDegree`,
      });
      dispatch(relationshipDegreeActions.clearDeleteRelationshipDegreeStatus());
      dispatch(relationshipDegreeActions.clearDeleteRelationshipDegreeError());
    }
  }, [status, error, dispatch]);

  const handleDeleteRelationshipDegree = (relationshipDegreeId, confirm = 'true', undo = 'false') => {
      dispatch(deleteRelationshipDegree(relationshipDegreeId, confirm, undo));
  };

  return {loading, data, handleDeleteRelationshipDegree};
};
