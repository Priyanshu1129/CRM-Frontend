import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { getAllUsers } from "@/redux/actions/userAction";
import { userActions } from "@/redux/slices/userSlice";

export const useFetchUsers = (
  currentPage,
  pageSize,
  refresh,
  setRefresh,
  showDeletedItems
) => {
  const dispatch = useDispatch();
  const { status, data, error } = useSelector((state) =>
    showDeletedItems ? state.user.getAllDeletedUsers : state.user.getAllUsers
  );
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(data?.users || []);

  const fetchAllUsers = useCallback(() => {
    dispatch(
      getAllUsers({
        page: currentPage,
        limit: pageSize,
        deleted: showDeletedItems,
      })
    );
    setRefresh(false);
  }, [dispatch, currentPage, pageSize, setRefresh, showDeletedItems]);

  useEffect(() => {
    if (
      !data?.users ||
      currentPage !== Number(data?.page) ||
      pageSize !== Number(data?.limit) ||
      refresh
    ) {
      fetchAllUsers();
    } else {
      setUsers(data?.users);
    }
  }, [
    fetchAllUsers,
    currentPage,
    pageSize,
    data?.page,
    data?.limit,
    refresh,
    data?.users,
    showDeletedItems,
  ]);

  useEffect(() => {
    if (status === "pending") {
      setLoading(true);
    } else if (status === "success") {
      setUsers(data?.users || []);
      setLoading(false);
      dispatch(userActions.clearGetAllUsersStatus());
    } else if (status === "failed") {
      setLoading(false);
      notification.error({
        message: "Error",
        description: error || "Failed to fetch users.",
      });
      dispatch(userActions.clearGetAllUsersStatus());
      dispatch(userActions.clearGetAllUsersError());
    }
  }, [dispatch, status, data?.users, error]);

  return {
    users,
    loading,
    totalCount: data?.totalCount,
  };
};
