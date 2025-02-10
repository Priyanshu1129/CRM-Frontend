import { axiosRequest } from "@/utilities/axiosHelper";
import { archeTypeActions } from "@/redux/slices/contactSlice";
import { serverURL } from "@/config/config";

const route = `${serverURL}/contact/config/archetype`;

export const getAllArcheTypes = () => async (dispatch) => {
  try {
    dispatch(archeTypeActions.getAllArcheTypesRequest());
    console.log("getAllArcheTypes");

    // Use axiosRequest helper function for GET request
    const response = await axiosRequest(dispatch, "GET", `${route}/`, null, null);

    console.log("get-all-archeType-res-data", response);
    dispatch(archeTypeActions.getAllArcheTypesSuccess(response));
  } catch (error) {
    console.log("get-all-archeType-error", error);
    dispatch(
      archeTypeActions.getAllArcheTypesFailure(
        error.message || "Failed to fetch archetypes"
      )
    );
  }
};

export const getArcheType = (archeTypeId) => async (dispatch) => {
  try {
    console.log("get-archeType-data", archeTypeId);
    dispatch(archeTypeActions.getArcheTypeRequest());

    // Use axiosRequest helper function for GET request
    const response = await axiosRequest(
      dispatch,
      "GET",
      `${route}/details/${archeTypeId}`,
      null,
      null
    );

    console.log("get-archeType-details-res-data", response);
    dispatch(archeTypeActions.getArcheTypeSuccess(response));
  } catch (error) {
    console.log("get-archeType-error", error);
    dispatch(
      archeTypeActions.getArcheTypeFailure(
        error.message || "Failed to get archetype details"
      )
    );
  }
};

export const createArcheType = (archeTypeData) => async (dispatch) => {
  try {
    console.log("create-archeTypeData", archeTypeData);
    dispatch(archeTypeActions.createArcheTypeRequest());

    // Use axiosRequest helper function for POST request
    const response = await axiosRequest(
      dispatch,
      "POST",
      `${route}/`,
      archeTypeData,
      null
    );

    console.log("create-archeType-res-data", response);
    dispatch(archeTypeActions.createArcheTypeSuccess(response));
    dispatch(
      archeTypeActions.updateArcheTypeList({
        type: "add",
        payload: response?.data,
      })
    );
  } catch (error) {
    console.log("create-archeType-error", error);
    dispatch(
      archeTypeActions.createArcheTypeFailure(
        error.message || "Failed to create archetype"
      )
    );
  }
};

export const updateArcheType = (archeTypeData, archeTypeId) => async (dispatch) => {
  try {
    console.log("update-archeTypeData-req", archeTypeData);
    dispatch(archeTypeActions.updateArcheTypeRequest());

    // Use axiosRequest helper function for PUT request
    const response = await axiosRequest(
      dispatch,
      "PUT",
      `${route}/${archeTypeId}`,
      archeTypeData,
      null
    );

    console.log("update-archeType-res-data", response);
    dispatch(archeTypeActions.updateArcheTypeSuccess(response));
    dispatch(
      archeTypeActions.updateArcheTypeList({
        type: "update",
        payload: response?.data,
      })
    );
  } catch (error) {
    console.log("update-archeType-error", error);
    dispatch(
      archeTypeActions.updateArcheTypeFailure(
        error.message || "Failed to update archetype"
      )
    );
  }
};

export const deleteArcheType = (archeTypeId, confirm = "true", undo = "false") => async (dispatch) => {
  try {
    console.log("delete-archeTypeData", archeTypeId);
    dispatch(archeTypeActions.deleteArcheTypeRequest());

    // Use axiosRequest helper function for DELETE request
    const response = await axiosRequest(
      dispatch,
      "DELETE",
      `${route}/${archeTypeId}?confirm=${confirm}&undo=${undo}`
    );

    console.log("delete-archeType-res-data", response);
    dispatch(archeTypeActions.deleteArcheTypeSuccess(response));
    dispatch(
      archeTypeActions.updateArcheTypeList({
        type: "delete",
        payload: response?.data
      })
    );
  } catch (error) {
    console.log("delete-archeType-error", error);
    dispatch(
      archeTypeActions.deleteArcheTypeFailure(
        error.message || "Failed to delete archetype"
      )
    );
  }
};
