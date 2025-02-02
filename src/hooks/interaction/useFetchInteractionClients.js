import { useState, useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { getAllInteractionClients } from "@/redux/actions/interactionAction";
import { interactionActions } from "@/redux/slices/interactionSlice";

export const useFetchInteractionClients = ({ territory, industry }) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { status, data, error } = useSelector(
    (state) => state.interaction.getAllInteractionClients
  );
  const [clients, setClients] = useState(data);

  useEffect(() => {
    if (status == "pending") {
      setLoading(true);
    } else if (status == "success") {
      setClients(data);
      setLoading(false);
      dispatch(interactionActions.clearGetAllInteractionClientsStatus());
    } else if (status == "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || "Failed to fetch clients.",
      });
      dispatch(interactionActions.clearGetAllInteractionClientsStatus());
      dispatch(interactionActions.clearGetAllInteractionClientsError());
    }
  }, [dispatch, status, data?.clients, error]);

  useEffect(() => {
    if (territory || industry)
      dispatch(getAllInteractionClients({ territory, industry }));
    else setClients([]);
  }, [territory, industry]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      setClients([]); // Reset clients when component unmounts
      dispatch(interactionActions.clearGetAllInteractionClientsData());
      dispatch(interactionActions.clearGetAllInteractionContactsData());
      dispatch(interactionActions.clearGetClientAllLeadsData());
    };
  }, []);

  return {
    loading,
    clients,
  };
};
