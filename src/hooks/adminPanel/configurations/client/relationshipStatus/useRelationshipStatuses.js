import { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRelationshipStatuses } from "@/redux/actions/configurationAction/client/relationshipStatus";
import { notification } from "antd";

export const useRelationshipStatuses = (params = {}) => {
  const {
    refresh = false,
    setRefresh = null,
    configType = null,
    config = false,
  } = params;

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { status, data, error } = useSelector(
    (state) => state.relationshipStatus.getAllRelationshipStatus
  );
  const [relationshipStatuses, setRelationshipStatuses] = useState(data?.data);

  const fetchAllRelationshipStatuses = useCallback(() => {
    if (!data || refresh) {
      dispatch(getAllRelationshipStatuses(config));
      setRefresh && setRefresh(false);
    }
  }, [dispatch, data, refresh]);

  useEffect(() => {
    if (!configType || configType == "relationship-status") fetchAllRelationshipStatuses();
  }, [fetchAllRelationshipStatuses, configType]);

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success" && data?.status === "success") {
      if (data?.data !== relationshipStatuses) {
        setRelationshipStatuses(data?.data);
      }
      setLoading(false);
    } else if (status === "failed") {
      notification.error({
        message: "Error",
        description: error || "Failed to  fetch RelationshipStatuses",
      });
      setLoading(false);
    }
  }, [status, data, relationshipStatuses, setRefresh]);

  const transformedRelationshipStatuses = useMemo(() => {
    return relationshipStatuses?.map(({ _id, label }) => ({
      value: _id,
      text: label,
    }));
  }, [relationshipStatuses]);

  return { relationshipStatuses: transformedRelationshipStatuses ?? [], loading };
};
