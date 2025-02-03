import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { opportunityActions } from "@/redux/slices/opportunitySlice";
import { createOpportunity } from "@/redux/actions/opportunityAction";
import { notification } from "antd";
import { convertRevenue } from "@/utilities/convertCurrency";
import { convertCurrency } from "@/utilities/convertCurrency";
import { leadActions } from "@/redux/slices/leadSlice";

export const useAddOpportunity = ({ form }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data: leadData } = useSelector((state) => state.lead.convertLead);
  const { currency } = useSelector((state) => state.currency.viewCurrency);

  const { status, error } = useSelector(
    (state) => state.opportunity.createOpportunity
  );

  useEffect(() => {
    if (leadData) {
      const dealInitialValues = {
        client: leadData?.client?._id,
        customId: leadData?.customId,
        projectName: leadData?.projectName,
        solution: leadData?.solution?._id,
        // salesTopLine: convertCurrency({
        //   value: leadData?.salesTopLine,
        //   selectedCurrency: currency?.value,
        // }),
        // offsets: convertCurrency({
        //   value: leadData?.salesOffset,
        //   selectedCurrency: currency?.value,
        // }),
      };
      form.setFieldsValue(dealInitialValues);
    }

    return () => {
      dispatch(leadActions.unsetConvertLead());
    };
  }, [leadData, form, currency]);

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setLoading(false);
      notification.success({
        message: "Success",
        description: "Opportunity added successfully.",
      });
      dispatch(opportunityActions.clearCreateOpportunityStatus());
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || "Failed to add opportunity.",
      });
      dispatch(opportunityActions.clearCreateOpportunityStatus());
      dispatch(opportunityActions.clearCreateOpportunityError());
    }
  }, [status, error, dispatch]);

  const onFinish = (values) => {
    const salesTopLineInUSD = convertCurrency({
      value: values?.salesTopLine,
      selectedCurrency: currency?.value,
      toUSD: true,
    });
    const offsetsInUSD = convertCurrency({
      value: values?.offsets,
      selectedCurrency: currency?.value,
      toUSD: true,
    });
    if (values?.revenue) {
      values.revenue = convertRevenue({
        revenue: values.revenue,
        selectedCurrency: currency?.value,
        toUSD: true,
      });
    }
    let newValues = {
      ...values,
      salesTopLine: salesTopLineInUSD,
      offsets: offsetsInUSD,
      // entryDate: new Date().toISOString(),
      customId: leadData ? leadData?.customId : null,
    };

    dispatch(createOpportunity(newValues));
  };

  return { loading, onFinish };
};
