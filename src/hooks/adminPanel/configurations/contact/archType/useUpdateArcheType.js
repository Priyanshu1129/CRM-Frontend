import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { archeTypeActions } from "@/redux/slices/contactSlice";
import { updateArcheType } from "@/redux/actions/contactAction";

export const useUpdateArcheType = ({
  updateConfigData,
  setShowUpdateConfigPopup,
}) => {
  console.log("updateconfigdata :",updateConfigData)
  const archeType = updateConfigData;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { status, data, error } = useSelector(
    (state) => state.archeType.updateArcheType
  );

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setLoading(false);
      notification.success({
        message: "Success",
        description: "ArcheType updated successfully.",
      });
      dispatch(archeTypeActions.clearUpdateArcheTypeStatus());
      setShowUpdateConfigPopup(false);
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || "Failed to update ArcheType",
      });
      dispatch(archeTypeActions.clearUpdateArcheTypeStatus());
      dispatch(archeTypeActions.clearUpdateArcheTypeError());
      setShowUpdateConfigPopup(false);
    }
  }, [status, error, dispatch]);

  const onFinish = (values) => {
    console.log("value ---", values)
    if (archeType.label != values.label)
      dispatch(updateArcheType(values, archeType._id));
  };

  return { loading, onFinish };
};
