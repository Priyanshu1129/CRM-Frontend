import { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllClassifications } from "@/redux/actions/configurationAction/client/classification";
import { notification } from "antd";

export const useClassifications = (params = {}) => {
  const {
    refresh = false,
    setRefresh = null,
    configType = null,
    config = false,
  } = params;

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { status, data, error } = useSelector(
    (state) => state.classification.getAllClassifications
  );
  const [classifications, setClassifications] = useState(data?.data);

  const fetchAllClassifications = useCallback(() => {
    if (!data || refresh) {
      dispatch(getAllClassifications(config));
      setRefresh && setRefresh(false);
    }
  }, [dispatch, data, refresh]);

  useEffect(() => {
    if (!configType || configType == "classification") fetchAllClassifications();
  }, [fetchAllClassifications, configType]);

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success" && data?.status === "success") {
      if (data?.data !== classifications) {
        setClassifications(data?.data);
      }
      setLoading(false);
    } else if (status === "failed") {
      notification.error({
        message: "Error",
        description: error || "Failed to  fetch Classifications",
      });
      setLoading(false);
    }
  }, [status, data, classifications, setRefresh]);

  const transformedClassifications = useMemo(() => {
    return classifications?.map(({ _id, label }) => ({
      value: _id,
      text: label,
    }));
  }, [classifications]);

  return { classifications: transformedClassifications ?? [], loading };
};
