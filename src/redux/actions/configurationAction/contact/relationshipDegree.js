import { axiosRequest } from "@/utilities/axiosHelper";
import { relationshipDegreeActions } from "@/redux/slices/contactSlice";
import { serverURL } from "@/config/config";

const route = `${serverURL}/contact/config/relationship-degree`;

export const getAllRelationshipDegrees = () => async (dispatch) => {
  try {
    dispatch(relationshipDegreeActions.getAllRelationshipDegreesRequest());
    console.log("getAllRelationshipDegrees");

    // Use axiosRequest helper function for GET request
    const response = await axiosRequest(dispatch, "GET", `${route}/`, null, null);

    console.log("get-all-relationshipDegree-res-data", response);
    dispatch(relationshipDegreeActions.getAllRelationshipDegreesSuccess(response));
  } catch (error) {
    console.log("get-all-relationshipDegree-error", error);
    dispatch(
      relationshipDegreeActions.getAllRelationshipDegreesFailure(
        error.message || "Failed to fetch relationship degrees"
      )
    );
  }
};

export const getRelationshipDegree = (relationshipDegreeId) => async (dispatch) => {
  try {
    console.log("get-relationshipDegree-data", relationshipDegreeId);
    dispatch(relationshipDegreeActions.getRelationshipDegreeRequest());

    // Use axiosRequest helper function for GET request
    const response = await axiosRequest(
      dispatch,
      "GET",
      `${route}/details/${relationshipDegreeId}`,
      null,
      null
    );

    console.log("get-relationshipDegree-details-res-data", response);
    dispatch(relationshipDegreeActions.getRelationshipDegreeSuccess(response));
  } catch (error) {
    console.log("get-relationshipDegree-error", error);
    dispatch(
      relationshipDegreeActions.getRelationshipDegreeFailure(
        error.message || "Failed to get relationship degree details"
      )
    );
  }
};

export const createRelationshipDegree = (relationshipDegreeData) => async (dispatch) => {
  try {
    console.log("create-relationshipDegreeData", relationshipDegreeData);
    dispatch(relationshipDegreeActions.createRelationshipDegreeRequest());

    // Use axiosRequest helper function for POST request
    const response = await axiosRequest(
      dispatch,
      "POST",
      `${route}/`,
      relationshipDegreeData,
      null
    );

    console.log("create-relationshipDegree-res-data", response);
    dispatch(relationshipDegreeActions.createRelationshipDegreeSuccess(response));
    dispatch(
      relationshipDegreeActions.updateRelationshipDegreeList({
        type: "add",
        payload: response?.data,
      })
    );
  } catch (error) {
    console.log("create-relationshipDegree-error", error);
    dispatch(
      relationshipDegreeActions.createRelationshipDegreeFailure(
        error.message || "Failed to create relationship degree"
      )
    );
  }
};

export const updateRelationshipDegree = (relationshipDegreeData, relationshipDegreeId) => async (dispatch) => {
  try {
    console.log("update-relationshipDegreeData-req", relationshipDegreeData);
    dispatch(relationshipDegreeActions.updateRelationshipDegreeRequest());

    // Use axiosRequest helper function for PUT request
    const response = await axiosRequest(
      dispatch,
      "PUT",
      `${route}/${relationshipDegreeId}`,
      relationshipDegreeData,
      null
    );

    console.log("update-relationshipDegree-res-data", response);
    dispatch(relationshipDegreeActions.updateRelationshipDegreeSuccess(response));
    dispatch(
      relationshipDegreeActions.updateRelationshipDegreeList({
        type: "update",
        payload: response?.data,
      })
    );
  } catch (error) {
    console.log("update-relationshipDegree-error", error);
    dispatch(
      relationshipDegreeActions.updateRelationshipDegreeFailure(
        error.message || "Failed to update relationship degree"
      )
    );
  }
};

export const deleteRelationshipDegree = (relationshipDegreeId, confirm = "true", undo = "false") => async (dispatch) => {
  try {
    console.log("delete-relationshipDegreeData", relationshipDegreeId);
    dispatch(relationshipDegreeActions.deleteRelationshipDegreeRequest());

    // Use axiosRequest helper function for DELETE request
    const response = await axiosRequest(
      dispatch,
      "DELETE",
      `${route}/${relationshipDegreeId}?confirm=${confirm}&undo=${undo}`
    );

    console.log("delete-relationshipDegree-res-data", response);
    dispatch(relationshipDegreeActions.deleteRelationshipDegreeSuccess(response));
    dispatch(
      relationshipDegreeActions.updateRelationshipDegreeList({
        type: "delete",
        payload: response?.data
      })
    );
  } catch (error) {
    console.log("delete-relationshipDegree-error", error);
    dispatch(
      relationshipDegreeActions.deleteRelationshipDegreeFailure(
        error.message || "Failed to delete relationship degree"
      )
    );
  }
};
