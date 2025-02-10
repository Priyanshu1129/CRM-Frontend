import { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllIncorporationTypes } from "@/redux/actions/configurationAction/client/incorporationType";
import { notification } from "antd";

export const useIncorporationTypes = (params = {}) => {
  const {
    refresh = false,
    setRefresh = null,
    configType = null,
    config = false,
  } = params;

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { status, data, error } = useSelector(
    (state) => state.incorporationType.getAllIncorporationTypes
  );
  const [incorporationTypes, setIncorporationTypes] = useState(data?.data);

  const fetchAllIncorporationTypes = useCallback(() => {
    if (!data || refresh) {
      dispatch(getAllIncorporationTypes(config));
      setRefresh && setRefresh(false);
    }
  }, [dispatch, data, refresh]);

  useEffect(() => {
    if (!configType || configType == "incorporation-type") fetchAllIncorporationTypes();
  }, [fetchAllIncorporationTypes, configType]);

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success" && data?.status === "success") {
      if (data?.data !== incorporationTypes) {
        setIncorporationTypes(data?.data);
      }
      setLoading(false);
    } else if (status === "failed") {
      notification.error({
        message: "Error",
        description: error || "Failed to  fetch IncorporationTypes",
      });
      setLoading(false);
    }
  }, [status, data, incorporationTypes, setRefresh]);

  const transformedIncorporationTypes = useMemo(() => {
    return incorporationTypes?.map(({ _id, label }) => ({
      value: _id,
      text: label,
    }));
  }, [incorporationTypes]);

  return { incorporationTypes: transformedIncorporationTypes ?? [], loading };
};
