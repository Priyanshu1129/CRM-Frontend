import { axiosRequest } from "@/utilities/axiosHelper";
import { relationshipStatusActions } from "@/redux/slices/clientSlice";
import { serverURL } from "@/config/config";

const route = `${serverURL}/client/config/relationship-status`;

export const getAllRelationshipStatuses = () => async (dispatch) => {
  try {
    console.log("getAllRelationshipStatus");
    dispatch(relationshipStatusActions.getAllRelationshipStatusRequest());

    // Use axiosRequest helper function for GET request
    const response = await axiosRequest(dispatch, "GET", `${route}/`, null, null);

    console.log("get-all-relationshipStatus-res-data", response);
    dispatch(relationshipStatusActions.getAllRelationshipStatusSuccess(response));
  } catch (error) {
    console.log("get-all-relationshipStatus-error", error);
    dispatch(
      relationshipStatusActions.getAllRelationshipStatusFailure(
        error.message || "Failed to get relationship statuses"
      )
    );
  }
};

export const getRelationshipStatus = (relationshipStatusId) => async (dispatch) => {
  try {
    console.log("get-relationshipStatus-data", relationshipStatusId);
    dispatch(relationshipStatusActions.getRelationshipStatusRequest());

    // Use axiosRequest helper function for GET request
    const response = await axiosRequest(
      dispatch,
      "GET",
      `${route}/details/${relationshipStatusId}`,
      null,
      null
    );

    console.log("get-relationshipStatus-details-res-data", response);
    dispatch(relationshipStatusActions.getRelationshipStatusSuccess(response));
  } catch (error) {
    console.log("get-relationshipStatus-error", error);
    dispatch(
      relationshipStatusActions.getRelationshipStatusFailure(
        error.message || "Failed to get relationship status details"
      )
    );
  }
};

export const createRelationshipStatus = (relationshipStatusData) => async (dispatch) => {
  try {
    console.log("create-relationshipStatusData", relationshipStatusData);
    dispatch(relationshipStatusActions.createRelationshipStatusRequest());

    // Use axiosRequest helper function for POST request
    const response = await axiosRequest(
      dispatch,
      "POST",
      `${route}/`,
      relationshipStatusData,
      null
    );

    console.log("create-relationshipStatus-res-data", response);
    dispatch(relationshipStatusActions.createRelationshipStatusSuccess(response));
    dispatch(
      relationshipStatusActions.updateRelationshipStatusList({
        type: "add",
        payload: response?.data,
      })
    );
  } catch (error) {
    console.log("create-relationshipStatus-error", error);
    dispatch(
      relationshipStatusActions.createRelationshipStatusFailure(
        error.message || "Failed to create relationship status"
      )
    );
  }
};

export const updateRelationshipStatus = (relationshipStatusData, relationshipStatusId) => async (dispatch) => {
  try {
    console.log("update-relationshipStatusData-req", relationshipStatusData);
    dispatch(relationshipStatusActions.updateRelationshipStatusRequest());

    // Use axiosRequest helper function for PUT request
    const response = await axiosRequest(
      dispatch,
      "PUT",
      `${route}/${relationshipStatusId}`,
      relationshipStatusData,
      null
    );

    console.log("update-relationshipStatus-res-data", response);
    dispatch(relationshipStatusActions.updateRelationshipStatusSuccess(response));
    dispatch(
      relationshipStatusActions.updateRelationshipStatusList({
        type: "update",
        payload: response?.data,
      })
    );
  } catch (error) {
    console.log("update-relationshipStatus-error", error);
    dispatch(
      relationshipStatusActions.updateRelationshipStatusFailure(
        error.message || "Failed to update relationship status"
      )
    );
  }
};

export const deleteRelationshipStatus = (relationshipStatusId, confirm = 'true', undo = 'false') => async (dispatch) => {
  try {
    console.log("delete-relationshipStatusData", relationshipStatusId);
    dispatch(relationshipStatusActions.deleteRelationshipStatusRequest());

    // Use axiosRequest helper function for DELETE request
    const response = await axiosRequest(
      dispatch,
      "DELETE",
      `${route}/${relationshipStatusId}?confirm=${confirm}&undo=${undo}`
    );

    console.log("delete-relationshipStatus-res-data", response);
    dispatch(relationshipStatusActions.deleteRelationshipStatusSuccess(response));
    dispatch(
      relationshipStatusActions.updateRelationshipStatusList({
        type: "delete",
        payload: response?.data,
      })
    );
  } catch (error) {
    console.log("delete-relationshipStatus-error", error);
    dispatch(
      relationshipStatusActions.deleteRelationshipStatusFailure(
        error.message || "Failed to delete relationship status"
      )
    );
  }
};
