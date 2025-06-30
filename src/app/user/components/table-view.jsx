import React from "react";
import { Table } from "@/components";
import { getColumns } from "./columns";
export const UsersTableView = ({
  setCurrentPage,
  setPageSize,
  loading,
  data,
  total,
  undoButton,
}) => {
  const columns = getColumns({ data, undoButton });
  return (
    <>
      <Table
        setCurrentPage={setCurrentPage}
        setPageSize={setPageSize}
        loading={loading}
        data={data}
        columns={columns}
        total={total}
        entityName="Users"
      />
    </>
  );
};
