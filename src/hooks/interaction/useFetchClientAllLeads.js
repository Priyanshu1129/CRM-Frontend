import { useState, useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { interactionActions } from "@/redux/slices/interactionSlice";
import { getClientAllLeads } from "@/redux/actions/interactionAction";

export const useFetchClientAllLeads = ({ form, client }) => {
  const [loading, setLoading] = useState(false);
  const [prevClient, setPrevClient] = useState(null);
  const dispatch = useDispatch();

  const { status, data, error } = useSelector(
    (state) => state.interaction.getClientAllLeads
  );

  const [clientAllLeads, setClientAllLeads] = useState(data?.leads || []);

  useEffect(() => {
    if (client && client != prevClient) {
      form.setFieldValue({ project: null });
      setClientAllLeads([]);
      dispatch(getClientAllLeads({ client, config: true }));
      setPrevClient(client);
    }
  }, [dispatch, client]);

  // Handle API response
  useEffect(() => {
    if (status == "pending") {
      setLoading(true);
    } else if (status === "success") {
      setClientAllLeads(data?.leads);
      dispatch(interactionActions.clearGetClientAllLeadsStatus());
      setLoading(false);
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || "Failed to fetch client all leads.",
      });
      dispatch(interactionActions.clearGetClientAllLeadsStatus());
      dispatch(interactionActions.clearGetClientAllLeadsError());
    }
  }, [status, data, error, dispatch, clientAllLeads]);

  return {
    loading,
    clientAllLeads,
  };
};
