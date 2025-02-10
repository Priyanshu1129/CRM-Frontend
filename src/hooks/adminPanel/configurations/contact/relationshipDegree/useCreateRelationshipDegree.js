import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { relationshipDegreeActions } from "@/redux/slices/contactSlice";
import { createRelationshipDegree } from "@/redux/actions/contactAction";


export const useCreateRelationshipDegree = ({ setShowCreateConfigPopup }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { status, data, error } = useSelector(
    (state) => state.relationshipDegree.createRelationshipDegree
  );

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setLoading(false);
      notification.success({
        message: "Success",
        description: "RelationshipDegree Created successfully.",
      });
      dispatch(relationshipDegreeActions.clearCreateRelationshipDegreeStatus());
      setShowCreateConfigPopup(false);
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || "Failed to create RelationshipDegree",
      });
      dispatch(relationshipDegreeActions.clearCreateRelationshipDegreeStatus());
      dispatch(relationshipDegreeActions.clearCreateRelationshipDegreeError());
      setShowCreateConfigPopup(false);
    }
  }, [status, error, dispatch]);

  const onFinish = (values) => {
    dispatch(createRelationshipDegree(values));
  };

  return { loading, onFinish };
};
