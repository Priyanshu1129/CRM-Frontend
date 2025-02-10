import { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllArcheTypes } from "@/redux/actions/contactAction";
import { notification } from "antd";

export const useArcheTypes = (params = {}) => {
  const {
    refresh = false,
    setRefresh = null,
    configType = null,
    config = false,
  } = params;

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { status, data, error } = useSelector(
    (state) => state.archeType.getAllArcheTypes
  );
  const [archeTypes, setArcheTypes] = useState(data?.data);

  const fetchAllArcheTypes = useCallback(() => {
    if (!data || refresh) {
      dispatch(getAllArcheTypes(config));
      setRefresh && setRefresh(false);
    }
  }, [dispatch, data, refresh]);

  useEffect(() => {
    if (!configType || configType == "arche-type") fetchAllArcheTypes();
  }, [fetchAllArcheTypes, configType]);

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success" && data?.status === "success") {
      if (data?.data !== archeTypes) {
        setArcheTypes(data?.data);
      }
      setLoading(false);
    } else if (status === "failed") {
      notification.error({
        message: "Error",
        description: error || "Failed to  fetch ArcheTypes",
      });
      setLoading(false);
    }
  }, [status, data, archeTypes, setRefresh]);

  const transformedArcheTypes = useMemo(() => {
    return archeTypes?.map(({ _id, label }) => ({
      value: _id,
      text: label,
    }));
  }, [archeTypes]);

  return { archeTypes: transformedArcheTypes ?? [], loading };
};
