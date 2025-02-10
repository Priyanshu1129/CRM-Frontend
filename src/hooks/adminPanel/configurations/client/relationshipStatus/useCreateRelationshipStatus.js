import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";

import { relationshipStatusActions } from "@/redux/slices/clientSlice";
import { createRelationshipStatus } from "@/redux/actions/configurationAction/client/relationshipStatus";


export const useCreateRelationshipStatus = ({ setShowCreateConfigPopup }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { status, data, error } = useSelector(
    (state) => state.relationshipStatus.createRelationshipStatus
  );

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setLoading(false);
      notification.success({
        message: "Success",
        description: "RelationshipStatus Created successfully.",
      });
      dispatch(relationshipStatusActions.clearCreateRelationshipStatusStatus());
      setShowCreateConfigPopup(false);
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || "Failed to create RelationshipStatus",
      });
      dispatch(relationshipStatusActions.clearCreateRelationshipStatusStatus());
      dispatch(relationshipStatusActions.clearCreateRelationshipStatusError());
      setShowCreateConfigPopup(false);
    }
  }, [status, error, dispatch]);

  const onFinish = (values) => {
    dispatch(createRelationshipStatus(values));
  };

  return { loading, onFinish };
};
