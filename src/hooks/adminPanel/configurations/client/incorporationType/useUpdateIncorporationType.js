import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { incorporationTypeActions } from "@/redux/slices/clientSlice";
import { updateIncorporationType } from "@/redux/actions/configurationAction/client/incorporationType";

export const useUpdateIncorporationType = ({
  updateConfigData,
  setShowUpdateConfigPopup,
}) => {
  console.log("updateconfigdata :",updateConfigData)
  const incorporationType = updateConfigData;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { status, data, error } = useSelector(
    (state) => state.incorporationType.updateIncorporationType
  );

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setLoading(false);
      notification.success({
        message: "Success",
        description: "IncorporationType updated successfully.",
      });
      dispatch(incorporationTypeActions.clearUpdateIncorporationTypeStatus());
      setShowUpdateConfigPopup(false);
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || "Failed to update IncorporationType",
      });
      dispatch(incorporationTypeActions.clearUpdateIncorporationTypeStatus());
      dispatch(incorporationTypeActions.clearUpdateIncorporationTypeError());
      setShowUpdateConfigPopup(false);
    }
  }, [status, error, dispatch]);

  const onFinish = (values) => {
    console.log("value ---", values)
    if (incorporationType.label != values.label)
      dispatch(updateIncorporationType(values, incorporationType._id));
  };

  return { loading, onFinish };
};
