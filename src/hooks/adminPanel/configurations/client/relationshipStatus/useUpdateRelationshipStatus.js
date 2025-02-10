import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { relationshipStatusActions } from "@/redux/slices/clientSlice";
import { updateRelationshipStatus } from "@/redux/actions/configurationAction/client/relationshipStatus";

export const useUpdateRelationshipStatus = ({
  updateConfigData,
  setShowUpdateConfigPopup,
}) => {
  console.log("updateconfigdata :",updateConfigData)
  const relationshipStatus = updateConfigData;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { status, data, error } = useSelector(
    (state) => state.relationshipStatus.updateRelationshipStatus
  );

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setLoading(false);
      notification.success({
        message: "Success",
        description: "RelationshipStatus updated successfully.",
      });
      dispatch(relationshipStatusActions.clearUpdateRelationshipStatusStatus());
      setShowUpdateConfigPopup(false);
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || "Failed to update RelationshipStatus",
      });
      dispatch(relationshipStatusActions.clearUpdateRelationshipStatusStatus());
      dispatch(relationshipStatusActions.clearUpdateRelationshipStatusError());
      setShowUpdateConfigPopup(false);
    }
  }, [status, error, dispatch]);

  const onFinish = (values) => {
    console.log("value ---", values)
    if (relationshipStatus.label != values.label)
      dispatch(updateRelationshipStatus(values, relationshipStatus._id));
  };

  return { loading, onFinish };
};
