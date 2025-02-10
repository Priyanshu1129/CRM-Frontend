import { axiosRequest } from "@/utilities/axiosHelper";
import { incorporationTypeActions } from "@/redux/slices/clientSlice";
import { serverURL } from "@/config/config";

const route = `${serverURL}/client/config/incorporation-type`;

export const getAllIncorporationTypes = () => async (dispatch) => {
  try {
    console.log("getAllIncorporationTypes");
    dispatch(incorporationTypeActions.getAllIncorporationTypesRequest());

    // Use axiosRequest helper function for GET request
    const response = await axiosRequest(
      dispatch,
      "GET",
      `${route}/`,
      null,
      null
    );

    console.log("get-all-incorporationType-res-data", response);
    dispatch(incorporationTypeActions.getAllIncorporationTypesSuccess(response));
  } catch (error) {
    console.log("get-all-incorporationTypes-error", error);
    dispatch(
      incorporationTypeActions.getAllIncorporationTypesFailure(
        error.message || "Failed to get incorporation types"
      )
    );
  }
};

export const getIncorporationType = (incorporationTypeId) => async (dispatch) => {
  try {
    console.log("get-incorporationType-data", incorporationTypeId);
    dispatch(incorporationTypeActions.getIncorporationTypeRequest());

    // Use axiosRequest helper function for GET request
    const response = await axiosRequest(
      dispatch,
      "GET",
      `${route}/details/${incorporationTypeId}`,
      null,
      null
    );

    console.log("get-incorporationType-details-res-data", response);
    dispatch(incorporationTypeActions.getIncorporationTypeSuccess(response));
  } catch (error) {
    console.log("get-incorporationType-error", error);
    dispatch(
      incorporationTypeActions.getIncorporationTypeFailure(
        error.message || "Failed to get incorporation type details"
      )
    );
  }
};

export const createIncorporationType = (incorporationTypeData) => async (dispatch) => {
  try {
    console.log("create-incorporationTypeData", incorporationTypeData);
    dispatch(incorporationTypeActions.createIncorporationTypeRequest());

    // Use axiosRequest helper function for POST request
    const response = await axiosRequest(
      dispatch,
      "POST",
      `${route}/`,
      incorporationTypeData,
      null
    );

    console.log("create-incorporationType-res-data", response);
    dispatch(incorporationTypeActions.createIncorporationTypeSuccess(response));
    dispatch(
      incorporationTypeActions.updateIncorporationTypeList({
        type: "add",
        payload: response?.data,
      })
    );
  } catch (error) {
    console.log("create-incorporationType-error", error);
    dispatch(
      incorporationTypeActions.createIncorporationTypeFailure(
        error.message || "Failed to create incorporation type"
      )
    );
  }
};

export const updateIncorporationType = (incorporationTypeData, incorporationTypeId) => async (dispatch) => {
  try {
    console.log("update-incorporationTypeData-req", incorporationTypeData);
    dispatch(incorporationTypeActions.updateIncorporationTypeRequest());

    // Use axiosRequest helper function for PUT request
    const response = await axiosRequest(
      dispatch,
      "PUT",
      `${route}/${incorporationTypeId}`,
      incorporationTypeData,
      null
    );

    console.log("update-incorporationType-res-data", response);
    dispatch(incorporationTypeActions.updateIncorporationTypeSuccess(response));
    dispatch(
      incorporationTypeActions.updateIncorporationTypeList({
        type: "update",
        payload: response?.data,
      })
    );
  } catch (error) {
    console.log("update-incorporationType-error", error);
    dispatch(
      incorporationTypeActions.updateIncorporationTypeFailure(
        error.message || "Failed to update incorporation type"
      )
    );
  }
};

export const deleteIncorporationType = (incorporationTypeId, confirm = 'true', undo = 'false') => async (dispatch) => {
  try {
    console.log("delete-incorporationTypeData", incorporationTypeId);
    dispatch(incorporationTypeActions.deleteIncorporationTypeRequest());

    // Use axiosRequest helper function for DELETE request
    const response = await axiosRequest(
      dispatch,
      "DELETE",
      `${route}/${incorporationTypeId}?confirm=${confirm}&undo=${undo}`
    );

    console.log("delete-incorporationType-res-data", response);
    dispatch(incorporationTypeActions.deleteIncorporationTypeSuccess(response));
    dispatch(
      incorporationTypeActions.updateIncorporationTypeList({
        type: "delete",
        payload: response?.data
      })
    );
  } catch (error) {
    console.log("delete-incorporationType-error", error);
    dispatch(
      incorporationTypeActions.deleteIncorporationTypeFailure(
        error.message || "Failed to delete incorporation type"
      )
    );
  }
};
