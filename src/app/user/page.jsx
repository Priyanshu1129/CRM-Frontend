"use client";
import React, { useState } from "react";
import { ListHeader } from "@/components";
import { UsersTableView } from "./components";
import { useFetchUsers } from "@/hooks/user";
import DeleteOrUndoUserModel from "./components/DeleteUserModal";

const UserMaster = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [refresh, setRefresh] = useState(false);
  const [showDeletedItems, setShowDeletedItems] = useState(false);

  const { users, loading, totalCount } = useFetchUsers(
    currentPage,
    pageSize,
    refresh,
    setRefresh,
    showDeletedItems
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%", // Full viewport height
      }}
    >
      <ListHeader
        toPath={"/user/add-user"}
        buttonText={"Add New Member"}
        deletedItemButtonText={"Members"}
        setShowDeletedItems={setShowDeletedItems}
        pageName={"user"}
        setRefresh={setRefresh}
      />
      <div
        style={{
          flex: "1", // Takes remaining space below header
          overflow: "hidden", // Prevent overflow
          borderRadius: "8px",
        }}
      >
        <UsersTableView
          data={users}
          setCurrentPage={setCurrentPage}
          setPageSize={setPageSize}
          loading={loading}
          total={totalCount}
          undoButton={showDeletedItems}
        />
      </div>
      <DeleteOrUndoUserModel undoMode={showDeletedItems} />
    </div>
  );
};

export default UserMaster;
