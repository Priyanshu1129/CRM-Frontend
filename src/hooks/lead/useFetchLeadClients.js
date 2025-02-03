import React, { useState, useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { getAllLeadClients } from "@/redux/actions/leadAction";
import { leadActions } from "@/redux/slices/leadSlice";

export const useFetchLeadClients = ({ territory, industry }) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { status, data, error } = useSelector(
    (state) => state.lead.getAllLeadClients
  );
  const [clients, setClients] = useState(data);

  useEffect(() => {
    if (status == "pending") {
      setLoading(true);
    } else if (status == "success") {
      setClients(data);
      setLoading(false);
      dispatch(leadActions.clearGetAllLeadClientsStatus());
    } else if (status == "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || "Failed to fetch clients.",
      });
      dispatch(leadActions.clearGetAllLeadClientsStatus());
      dispatch(leadActions.clearGetAllLeadClientsError());
    }
  }, [dispatch, status, data?.clients, error]);

  useEffect(() => {
    if (territory || industry)
      dispatch(getAllLeadClients({ territory, industry }));
    else setClients([]);
  }, [territory, industry]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      setClients([]); // Reset clients when component unmounts
      dispatch(leadActions.clearGetAllLeadClientsData());
      dispatch(leadActions.clearGetAllLeadContactsData());
    };
  }, []);

  return {
    loading,
    clients,
  };
};
