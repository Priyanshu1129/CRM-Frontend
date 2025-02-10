import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { classificationActions } from "@/redux/slices/clientSlice";
import { updateClassification } from "@/redux/actions/configurationAction/client/classification";

export const useUpdateClassification = ({
  updateConfigData,
  setShowUpdateConfigPopup,
}) => {
  console.log("updateconfigdata :",updateConfigData)
  const classification = updateConfigData;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { status, data, error } = useSelector(
    (state) => state.classification.updateClassification
  );

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setLoading(false);
      notification.success({
        message: "Success",
        description: "Classification updated successfully.",
      });
      dispatch(classificationActions.clearUpdateClassificationStatus());
      setShowUpdateConfigPopup(false);
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || "Failed to update Classification",
      });
      dispatch(classificationActions.clearUpdateClassificationStatus());
      dispatch(classificationActions.clearUpdateClassificationError());
      setShowUpdateConfigPopup(false);
    }
  }, [status, error, dispatch]);

  const onFinish = (values) => {
    console.log("value ---", values)
    if (classification.label != values.label)
      dispatch(updateClassification(values, classification._id));
  };

  return { loading, onFinish };
};
