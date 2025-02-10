import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";

import { classificationActions } from "@/redux/slices/clientSlice";
import { createClassification } from "@/redux/actions/configurationAction/client/classification";


export const useCreateClassification = ({ setShowCreateConfigPopup }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { status, data, error } = useSelector(
    (state) => state.classification.createClassification
  );

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setLoading(false);
      notification.success({
        message: "Success",
        description: "Classification Created successfully.",
      });
      dispatch(classificationActions.clearCreateClassificationStatus());
      setShowCreateConfigPopup(false);
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || "Failed to create Classification",
      });
      dispatch(classificationActions.clearCreateClassificationStatus());
      dispatch(classificationActions.clearCreateClassificationError());
      setShowCreateConfigPopup(false);
    }
  }, [status, error, dispatch]);

  const onFinish = (values) => {
    dispatch(createClassification(values));
  };

  return { loading, onFinish };
};
