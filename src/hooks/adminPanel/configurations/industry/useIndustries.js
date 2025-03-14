import { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllIndustries } from "@/redux/actions/configurationAction";
import { notification } from "antd";

export const useIndustries = (params = {}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    refresh = false,
    setRefresh = null,
    configType = null,
    config = false,
  } = params;

  const { status, data, error } = useSelector(
    (state) => state.industry.getAllIndustries
  );
  const [industries, setIndustries] = useState(data?.data);

  const fetchAllIndustries = useCallback(() => {
    if (!data || refresh) {
      dispatch(getAllIndustries(config));
      setRefresh && setRefresh(false);
    }
  }, [dispatch, data, refresh]);

  useEffect(() => {
    if (!configType || configType == "industry") fetchAllIndustries();
  }, [fetchAllIndustries, configType]);

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      if (data?.data !== industries) {
        setIndustries(data?.data);
      }
      setLoading(false);
    } else if (status === "failed") {
      notification.error({
        message: "Error",
        description: error || "Failed to  fetch Industries",
      });
      setLoading(false);
    }
  }, [status, data, industries, setRefresh]);

  const transformedIndustries = useMemo(() => {
    return industries?.map(({ _id, label }) => ({
      value: _id,
      text: label,
    }));
  }, [industries]);

  return { industries: transformedIndustries ?? [], loading };
};
