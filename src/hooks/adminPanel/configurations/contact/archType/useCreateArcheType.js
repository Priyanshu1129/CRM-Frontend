import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";

import { archeTypeActions } from "@/redux/slices/contactSlice";
import { createArcheType } from "@/redux/actions/contactAction";


export const useCreateArcheType = ({ setShowCreateConfigPopup }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { status, data, error } = useSelector(
    (state) => state.archeType.createArcheType
  );

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setLoading(false);
      notification.success({
        message: "Success",
        description: "ArcheType Created successfully.",
      });
      dispatch(archeTypeActions.clearCreateArcheTypeStatus());
      setShowCreateConfigPopup(false);
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || "Failed to create ArcheType",
      });
      dispatch(archeTypeActions.clearCreateArcheTypeStatus());
      dispatch(archeTypeActions.clearCreateArcheTypeError());
      setShowCreateConfigPopup(false);
    }
  }, [status, error, dispatch]);

  const onFinish = (values) => {
    dispatch(createArcheType(values));
  };

  return { loading, onFinish };
};
