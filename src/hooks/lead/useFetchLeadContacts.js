import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { getAllLeadContacts } from "@/redux/actions/leadAction";
import { leadActions } from "@/redux/slices/leadSlice";

export const useFetchLeadContacts = ({ form, client }) => {
  const [loading, setLoading] = useState(false);
  const [prevClient, setPrevClient] = useState(null);

  const dispatch = useDispatch();

  const { status, data, error } = useSelector(
    (state) => state.lead.getAllLeadContacts
  );

  const [contacts, setContacts] = useState(data?.contacts);

  useEffect(() => {
    if (client && client != prevClient) {
      form.setFieldValue({ contact: null });
      setContacts([]);
      dispatch(getAllLeadContacts({ client }));
      setPrevClient(client);
    }
  }, [client, dispatch]);

  useEffect(() => {
    if (status == "pending") {
      setLoading(true);
    } else if (status == "success") {
      setContacts(data?.contacts);
      setLoading(false);
      dispatch(leadActions.clearGetAllLeadContactsStatus());
    } else if (status == "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || "Failed to fetch contacts.",
      });
      dispatch(leadActions.clearGetAllLeadContactsStatus());
      dispatch(leadActions.clearGetAllLeadContactsError());
    }
  }, [dispatch, status, data?.contacts, error]);

  return {
    loading,
    contacts,
  };
};
