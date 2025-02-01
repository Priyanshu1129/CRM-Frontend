import { useState, useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { leadActions } from "@/redux/slices/leadSlice";
import { getAllLeads } from "@/redux/actions/leadAction";

export const useFetchLeads = ({
  pageSize,
  currentPage,
  filters,
  setFilters,
}) => {
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [filter, setFilter] = useState(false);

  const prevSorterRef = useRef({});
  const dispatch = useDispatch();
  const { status, data, error } = useSelector(
    (state) => state.lead.getAllLeads
  );

  // Store leads separately to avoid redundant re-renders
  const [leads, setLeads] = useState(data?.leads || []);

  /**
   * Fetch all leads with proper checks to avoid redundant calls
   */
  const fetchAllLeads = useCallback(() => {
    if (
      !data || // No data fetched yet
      refresh || // Force refresh
      filter // Filter changed
      // currentPage !== Number(data?.page) ||
      // pageSize !== Number(data?.limit)
    ) {
      setLoading(true);
      dispatch(
        getAllLeads({ page: currentPage, limit: pageSize, ...filters })
      ).finally(() => {
        setLoading(false);
        setFilter(false);
        setRefresh(false);
      });
    }
  }, [dispatch, currentPage, pageSize, filters, refresh, filter, data]);

  // Fetch leads on mount or when dependencies change
  useEffect(() => {
    fetchAllLeads();
  }, [fetchAllLeads]);

  // Handle API response
  useEffect(() => {
    if (status === "success") {
      if (JSON.stringify(leads) !== JSON.stringify(data?.leads)) {
        setLeads(data?.leads || []);
      }
      dispatch(leadActions.clearGetAllLeadsStatus());
    } else if (status === "failed") {
      notification.error({
        message: "Error",
        description: error || "Failed to fetch leads.",
      });
      dispatch(leadActions.clearGetAllLeadsStatus());
      dispatch(leadActions.clearGetAllLeadsError());
    }
  }, [status, data?.leads, error, dispatch, leads]);

  /**
   * Handle table filters and sorting
   */
  const handleFilter = (pagination, tableFilters, sorter) => {
    let { field: currentSortField, order: currentSortOrder } = sorter || {};
    const prevSortField = prevSorterRef.current?.field;
    const prevSortOrder = prevSorterRef.current?.order;

    // Check if sorter changed
    const hasSorterChanged =
      currentSortField !== prevSortField || currentSortOrder !== prevSortOrder;

    prevSorterRef.current = {
      field: currentSortField,
      order: currentSortOrder,
    };

    if (hasSorterChanged) {
      // Convert sorting order
      currentSortOrder = currentSortOrder === "descend" ? "-1" : "1";

      // Apply filters and fetch leads again
      setFilters({
        ...filters,
        entryDate: currentSortField === "entryDate" ? currentSortOrder : "",
      });

      setFilter(true);
    }
  };

  return {
    loading,
    leads,
    handleFilter,
    setRefresh,
    setFilter,
    total: data?.totalCount,
  };
};
