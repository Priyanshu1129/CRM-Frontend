import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInteraction } from "@/redux/actions/interactionAction";
import { notification } from "antd";
import { interactionActions } from "@/redux/slices/interactionSlice";

export const useUpdateInteraction = ({ interactionId }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { status, error, data } = useSelector(
    (state) => state.interaction.updateInteraction
  );

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setLoading(false);
      notification.success({
        message: "Success",
        description: "Interaction updated successfully.",
      });
      dispatch(interactionActions.clearUpdateInteractionStatus());
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || "Failed to update interaction.",
      });
      dispatch(interactionActions.clearUpdateInteractionStatus());
      dispatch(interactionActions.clearUpdateInteractionError());
    }
  }, [status, error, dispatch]);

  const handleUpdate = (data) => {
    if (data?.interactions && interactionId)
      dispatch(
        updateInteraction({
          interactionId,
          data: { interactions: data?.interactions },
        })
      );
  };

  return { loading, handleUpdate };
};
