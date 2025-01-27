"use client";
import React, { useState } from "react";
import { ListHeader } from "@/components";
import { LeadsTableView } from "../components";
import { Filter } from "../components/filter";
import { useFetchLeads } from "@/hooks/lead";

const OpportunityMaster = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [filters, setFilters] = useState({});

  const { loading, leads, total, setFilter, setRefresh, handleFilter } =
    useFetchLeads({
      pageSize,
      currentPage,
      filters,
      setFilters,
    });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%", // Full viewport height
      }}
    >
      <ListHeader
        pageName={"interaction"}
        backButton={true}
        addButton={false}
        setRefresh={setRefresh}
        setFilter={setFilter}
        setFilters={setFilters}
        filters={filters}
        FilterComponent={Filter}
      />
      <div
        style={{
          flex: "1", // Takes remaining space below header
          overflow: "hidden", // Prevent overflow
          borderRadius: "8px",
        }}
      >
        <LeadsTableView
          data={leads}
          setCurrentPage={setCurrentPage}
          setPageSize={setPageSize}
          loading={loading}
          total={total}
          handleFilter={handleFilter}
        />
      </div>
    </div>
  );
};

export default OpportunityMaster;
