import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { relationshipDegreeActions } from "@/redux/slices/contactSlice";
import { updateRelationshipDegree } from "@/redux/actions/contactAction";

export const useUpdateRelationshipDegree = ({
  updateConfigData,
  setShowUpdateConfigPopup,
}) => {
  console.log("updateconfigdata :",updateConfigData)
  const relationshipDegree = updateConfigData;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { status, data, error } = useSelector(
    (state) => state.relationshipDegree.updateRelationshipDegree
  );

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setLoading(false);
      notification.success({
        message: "Success",
        description: "RelationshipDegree updated successfully.",
      });
      dispatch(relationshipDegreeActions.clearUpdateRelationshipDegreeStatus());
      setShowUpdateConfigPopup(false);
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || "Failed to update RelationshipDegree",
      });
      dispatch(relationshipDegreeActions.clearUpdateRelationshipDegreeStatus());
      dispatch(relationshipDegreeActions.clearUpdateRelationshipDegreeError());
      setShowUpdateConfigPopup(false);
    }
  }, [status, error, dispatch]);

  const onFinish = (values) => {
    console.log("value ---", values)
    if (relationshipDegree.label != values.label)
      dispatch(updateRelationshipDegree(values, relationshipDegree._id));
  };

  return { loading, onFinish };
};
