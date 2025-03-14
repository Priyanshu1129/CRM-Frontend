import { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTerritories } from "@/redux/actions/configurationAction";
import { notification } from "antd";

export const useTerritories = (params = {}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    refresh = false,
    setRefresh = null,
    configType = null,
    config = false,
  } = params;

  const { status, data, error } = useSelector(
    (state) => state.territory.getAllTerritories
  );
  const [territories, setTerritories] = useState(data?.data);

  const fetchAllTerritories = useCallback(() => {
    if (!data || refresh) {
      dispatch(getAllTerritories(config));
      setRefresh && setRefresh(false);
    }
  }, [dispatch, data, refresh]);

  useEffect(() => {
    if (!configType || configType == "territory") fetchAllTerritories();
  }, [fetchAllTerritories, configType]);

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success" && data?.status === "success") {
      setTerritories(data?.data);
      setLoading(false);
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || "Failed to  fetch Territories",
      });
    }
  }, [status, data, setRefresh]);

  const transformedTerritories = useMemo(() => {
    return territories?.map(({ _id, label }) => ({
      value: _id,
      text: label,
    }));
  }, [territories]);

  return { territories: transformedTerritories ?? [], loading };
};
