import { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRelationshipDegrees } from "@/redux/actions/contactAction";
import { notification } from "antd";

export const useRelationshipDegrees = (params = {}) => {
  const {
    refresh = false,
    setRefresh = null,
    configType = null,
    config = false,
  } = params;

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { status, data, error } = useSelector(
    (state) => state.relationshipDegree.getAllRelationshipDegrees
  );
  const [relationshipDegrees, setRelationshipDegrees] = useState(data?.data);

  const fetchAllRelationshipDegrees = useCallback(() => {
    if (!data || refresh) {
      dispatch(getAllRelationshipDegrees(config));
      setRefresh && setRefresh(false);
    }
  }, [dispatch, data, refresh]);

  useEffect(() => {
    if (!configType || configType == "relationship-degree") fetchAllRelationshipDegrees();
  }, [fetchAllRelationshipDegrees, configType]);

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success" && data?.status === "success") {
      if (data?.data !== relationshipDegrees) {
        setRelationshipDegrees(data?.data);
      }
      setLoading(false);
    } else if (status === "failed") {
      notification.error({
        message: "Error",
        description: error || "Failed to  fetch RelationshipDegrees",
      });
      setLoading(false);
    }
  }, [status, data, relationshipDegrees, setRefresh]);

  const transformedRelationshipDegrees = useMemo(() => {
    return relationshipDegrees?.map(({ _id, label }) => ({
      value: _id,
      text: label,
    }));
  }, [relationshipDegrees]);

  return { relationshipDegrees: transformedRelationshipDegrees ?? [], loading };
};
