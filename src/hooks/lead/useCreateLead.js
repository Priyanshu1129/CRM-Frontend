import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLead } from "@/redux/actions/leadAction";
import { notification } from "antd";
import { convertCurrency } from "@/utilities/convertCurrency";
import { leadActions } from "@/redux/slices/leadSlice";

export const useAddLead = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { currency } = useSelector((state) => state.currency.viewCurrency);

  const { status, error } = useSelector((state) => state.lead.createLead);

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setLoading(false);
      notification.success({
        message: "Success",
        description: "Lead added successfully.",
      });
      dispatch(leadActions.clearCreateLeadStatus());
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || "Failed to add lead.",
      });
      dispatch(leadActions.clearCreateLeadStatus());
      dispatch(leadActions.clearCreateLeadError());
    }
  }, [status, error, dispatch]);

  const onFinish = (values) => {
    const salesTopLineInUSD = convertCurrency({
      value: values?.salesTopLine,
      selectedCurrency: currency?.value,
      toUSD: true,
    });
    const offsetsInUSD = convertCurrency({
      value: values?.salesOffset,
      selectedCurrency: currency?.value,
      toUSD: true,
    });
    let newValues = {
      ...values,
      salesTopLine: salesTopLineInUSD,
      salesOffset: offsetsInUSD,
      // entryDate: new Date().toISOString(),
    };
    dispatch(createLead(newValues));
  };

  return { loading, onFinish };
};
