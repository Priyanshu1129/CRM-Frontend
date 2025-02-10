import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";

import { incorporationTypeActions } from "@/redux/slices/clientSlice";
import { createIncorporationType } from "@/redux/actions/configurationAction/client/incorporationType";


export const useCreateIncorporationType = ({ setShowCreateConfigPopup }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { status, data, error } = useSelector(
    (state) => state.incorporationType.createIncorporationType
  );

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setLoading(false);
      notification.success({
        message: "Success",
        description: "IncorporationType Created successfully.",
      });
      dispatch(incorporationTypeActions.clearCreateIncorporationTypeStatus());
      setShowCreateConfigPopup(false);
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || "Failed to create IncorporationType",
      });
      dispatch(incorporationTypeActions.clearCreateIncorporationTypeStatus());
      dispatch(incorporationTypeActions.clearCreateIncorporationTypeError());
      setShowCreateConfigPopup(false);
    }
  }, [status, error, dispatch]);

  const onFinish = (values) => {
    dispatch(createIncorporationType(values));
  };

  return { loading, onFinish };
};
