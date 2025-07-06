"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { userActions } from "@/redux/slices/userSlice";
import { deleteUser } from "@/redux/actions/userAction";

export const useDeleteUser = (undoMode) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { status, data, error } = useSelector((state) => state.user.deleteUser);

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setLoading(false);
      notification.success({
        message: "Success",
        description: `User ${undoMode ? "undo" : "deleted"} successfully `,
      });
      dispatch(userActions.clearDeleteUserError());
      dispatch(userActions.clearDeleteUserStatus());
      dispatch(
        userActions.setDeleteOrUndoUserPopup({ open: false, user: null })
      );
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || `Failed to ${undoMode ? "undo" : "delete"} User`,
      });
      dispatch(userActions.clearDeleteUserStatus());
      dispatch(userActions.clearDeleteUserError());
    }
  }, [status, error, dispatch]);

  const handleDeleteUser = (userId, confirm = "true", undo = "false") => {
    dispatch(deleteUser(userId, confirm, undo));
  };

  return { loading, data, handleDeleteUser };
};
