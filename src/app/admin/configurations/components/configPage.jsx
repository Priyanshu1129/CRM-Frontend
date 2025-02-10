"use client";
import React, { useState } from "react";

import { ListHeader } from "@/components";
import UpdateConfigModal from "./update-config-modal";
import CreateConfigModal from "./create-config-modal";
import { ConfigTableView } from "./table-view";
import {
  useSubIndustries,
  useTerritories,
  useIndustries,
  useSolutions,
  useSubSolutions,
  useSalesStages,
  useSalesSubStages,
} from "@/hooks";

import DeleteConfigModal from "./delete-config-model";
import { useClassifications } from "@/hooks/adminPanel/configurations/client/classification/useClassifications";
import { useIncorporationTypes } from "@/hooks/adminPanel/configurations/client/incorporationType/useIncorporationTypes";
import { useArcheTypes } from "@/hooks/adminPanel/configurations/contact/archType/useArcheTypes";
import { useRelationshipDegrees } from "@/hooks/adminPanel/configurations/contact/relationshipDegree/useRelationshipDegrees";
import { useRelationshipStatuses } from "@/hooks/adminPanel/configurations/client/relationshipStatus/useRelationshipStatuses";

const ConfigPage = ({ configType }) => {
  const [pageSize, setPageSize] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [updateConfigData, setUpdateConfigData] = useState(null);
  const [showUpdateConfigPopup, setShowUpdateConfigPopup] = useState(false);
  const [showCreateConfigPopup, setShowCreateConfigPopup] = useState(false);
  const [refresh, setRefresh] = useState(false);

  // Call all hooks unconditionally
  const { territories, loading: territoriesLoading } = useTerritories({
    refresh,
    setRefresh,
    configType,
  });
  const { industries, loading: industriesLoading } = useIndustries({
    refresh,
    setRefresh,
    configType,
  });
  const { subIndustries, loading: subIndustriesLoading } = useSubIndustries({
    refresh,
    setRefresh,
    configType,
  });
  const { solutions, loading: solutionsLoading } = useSolutions({
    refresh,
    setRefresh,
    configType,
  });
  const { subSolutions, loading: subSolutionsLoading } = useSubSolutions({
    refresh,
    setRefresh,
    configType,
  });
  const { salesStages, loading: salesStagesLoading } = useSalesStages({
    refresh,
    setRefresh,
    configType,
  });
  const { salesSubStages, loading: salesSubStagesLoading } = useSalesSubStages({
    refresh,
    setRefresh,
    configType,
  });
  const {classifications, loading : classificationLoading} = useClassifications({
    refresh,
    setRefresh,
    configType,
  });
  const {incorporationTypes, loading : incorporationTypeLoading } = useIncorporationTypes({
    refresh,
    setRefresh,
    configType,
  });
  const {relationshipStatuses, loading : relationshipStatusesLoading } = useRelationshipStatuses({
    refresh,
    setRefresh,
    configType,
  });
  const {archeTypes, loading : archeTypeLoading } = useArcheTypes({
    refresh,
    setRefresh,
    configType,
  });
  const {relationshipDegrees, loading : relationshipDegreesLoading } = useRelationshipDegrees({
    refresh,
    setRefresh,
    configType,
  });

  // Determine data and loading state based on configType
  let data, loading;
  switch (configType) {
    case "territory":
      data = territories;
      loading = territoriesLoading;
      break;
    case "industry":
      data = industries;
      loading = industriesLoading;
      break;
    case "sub-industry":
      data = subIndustries;
      loading = subIndustriesLoading;
      break;
    case "solution":
      data = solutions;
      loading = solutionsLoading;
      break;
    case "sub-solution":
      data = subSolutions;
      loading = subSolutionsLoading;
      break;
    case "sales-stage":
      data = salesStages;
      loading = salesStagesLoading;
      break;
    case "sales-sub-stage":
      data = salesSubStages;
      loading = salesSubStagesLoading;
      break;
    //client
    case "classification":
      data = classifications;
      loading = classificationLoading;
      break;
    case "incorporation-type":
      data = incorporationTypes;
      loading = incorporationTypeLoading;
      break;
    case "relationship-status":
      data = relationshipStatuses;
      loading = relationshipStatusesLoading;
      break;
    //contact
    case "arche-type":
      data = archeTypes;
      loading = archeTypeLoading;
      break;
    case "relationship-degree":
      data = relationshipDegrees;
      loading = relationshipDegreesLoading;
      break;
    default:
      data = [];
      loading = false;
      break;
  }

  return (
    <>
      <ListHeader
        toPath={"/admin/configurations/add-configuration"}
        buttonText={`Add new ${configType}`}
        pageName={configType}
        setRefresh={setRefresh}
        type={"config"}
        backButton={true}
        backButtonText={false}
        setShowCreateConfigPopup={setShowCreateConfigPopup}
        configType={configType}
      />
      <ConfigTableView
        data={data}
        loading={loading}
        setShowUpdateConfigPopup={setShowUpdateConfigPopup}
        setUpdateConfigData={setUpdateConfigData}
        refresh={refresh}
        setPageSize={setPageSize}
        pageSize={pageSize}
        configType={configType}
        setCurrentPage={setCurrentPage}
      />
      <UpdateConfigModal
        configType={configType}
        updateConfigData={updateConfigData}
        showUpdateConfigPopup={showUpdateConfigPopup}
        setShowUpdateConfigPopup={setShowUpdateConfigPopup}
      />

      <DeleteConfigModal />

      {configType != "sales-stage" && (
        <CreateConfigModal
          configType={configType}
          showCreateConfigPopup={showCreateConfigPopup}
          setShowCreateConfigPopup={setShowCreateConfigPopup}
        />
      )}
    </>
  );
};

export default ConfigPage;
