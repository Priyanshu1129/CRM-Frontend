// import { useState, useEffect, useCallback, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { notification } from "antd";
// import { leadActions } from "@/redux/slices/leadSlice";
// import { getAllLeads } from "@/redux/actions/leadAction";

// export const useFetchLeads = ({
//   pageSize,
//   currentPage,
//   filters,
//   setFilters,
// }) => {
//   const [loading, setLoading] = useState(false);
//   const [refresh, setRefresh] = useState(false);
//   const [filter, setFilter] = useState(false);

//   const prevSorterRef = useRef({});
//   const dispatch = useDispatch();
//   const { status, data, error } = useSelector(
//     (state) => state.lead.getAllLeads
//   );
//   const [leads, setLeads] = useState(data?.leads);

//   const fetchAllLeads = useCallback(() => {
//     if (
//       !leads ||
//       currentPage !== Number(data?.page) ||
//       pageSize !== Number(data?.limit) ||
//       refresh ||
//       (filters && filter)
//     ) {
//       dispatch(getAllLeads({ page: currentPage, limit: pageSize, ...filters }));
//       setFilter(false);
//       setRefresh(false);
//     }
//   }, [
//     dispatch,
//     leads,
//     currentPage,
//     pageSize,
//     data?.page,
//     data?.limit,
//     refresh,
//     filters,
//     filter,
//   ]);

//   useEffect(() => {
//     fetchAllLeads();
//   }, [fetchAllLeads]);

//   useEffect(() => {
//     if (filter) {
//       fetchAllLeads();
//     }
//   }, [filter, filters, fetchAllLeads]);

//   useEffect(() => {
//     if (status == "pending") {
//       setLoading(true);
//     } else if (status == "success") {
//       setLeads(data?.leads);
//       setLoading(false);
//       dispatch(leadActions.clearGetAllLeadsStatus());
//     } else if (status == "failed") {
//       setLoading(false);
//       notification.error({
//         message: "Error",
//         description: error || "Failed to fetch leads.",
//       });
//       dispatch(leadActions.clearGetAllLeadsStatus());
//       dispatch(leadActions.clearGetAllLeadsError());
//     }
//   }, [dispatch, status, data?.leads, error]);

//   const handleFilter = (pagination, tableFilters, sorter) => {
//     let { field: currentSortField, order: currentSortOrder } = sorter || {};
//     const prevSortField = prevSorterRef.current?.field;
//     const prevSortOrder = prevSorterRef.current?.order;

//     // Compare sorter by field and order
//     const hasSorterChanged =
//       currentSortField !== prevSortField || currentSortOrder !== prevSortOrder;

//     prevSorterRef.current = {
//       field: currentSortField,
//       order: currentSortOrder,
//     };

//     if (hasSorterChanged) {
//       // Dispatch the getAllClients action with the applied filters and sorting
//       currentSortOrder = currentSortOrder == "descend" ? "-1" : "1";
//       setFilters({
//         ...filters,
//         entryDate: currentSortField == "entryDate" ? currentSortOrder : "",
//       });
//       setFilter(true);
//       fetchAllLeads();
//     }
//   };

//   return {
//     loading,
//     leads,
//     handleFilter,
//     setRefresh,
//     setFilter,
//     total: data?.totalCount,
//   };
// };

import { useState } from "react";

export const useFetchLeads = () => {
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [filter, setFilter] = useState(false);

  const data = [
    {
      serialNumber: 1,
      entryDate: new Date().toISOString(),
      enteredBy: { firstName: "John", lastName: "Doe" },
      client: { name: "Acme Corp" },
      projectName: "Project Alpha",
      solution: { label: "Custom Solution A" },
      about: "Brief description of the opportunity.",
      salesTopLine: 50000,
      offsets: 10000,
    },
    {
      serialNumber: 2,
      entryDate: new Date().toISOString(),
      enteredBy: { firstName: "Jane", lastName: "Smith" },
      client: { name: "Globex Inc." },
      projectName: "Project Beta",
      solution: { label: "Standard Solution B" },
      about: "Another brief description of the opportunity.",
      salesTopLine: 75000,
      offsets: 15000,
    },
  ];

  return {
    loading,
    leads: data,
    total: data.length,
    setFilter,
    setRefresh,
    handleFilter: () => {},
  };
};
