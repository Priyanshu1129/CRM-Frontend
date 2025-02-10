import { axiosRequest } from "@/utilities/axiosHelper";
import { classificationActions } from "@/redux/slices/clientSlice";
import { serverURL } from "@/config/config";

const route = `${serverURL}/client/config/classification`;

export const getAllClassifications = (config = false) => async (dispatch) => {
  try {
    dispatch(classificationActions.getAllClassificationsRequest());
    console.log("getAllClassifications");
    const params = { config };

    // Use axiosRequest helper function to make the GET request
    const response = await axiosRequest(
      dispatch,
      "GET",
      `${route}/`,
      null,
      params
    );

    console.log("get-all-classification-res-data", response);
    dispatch(classificationActions.getAllClassificationsSuccess(response));
  } catch (error) {
    console.log("get-all-classifications-error", error);
    dispatch(
      classificationActions.getAllClassificationsFailure(
        error.message || "Failed to get classifications"
      )
    );
  }
};

export const getClassification = (classificationId) => async (dispatch) => {
  try {
    console.log("get-classification-data", classificationId);
    dispatch(classificationActions.getClassificationRequest());

    // Use axiosRequest helper function to make the GET request
    const response = await axiosRequest(
      dispatch,
      "GET",
      `${route}/details/${classificationId}`,
      null,
      null
    );

    console.log("get-classification-details-res-data", response);
    dispatch(classificationActions.getClassificationSuccess(response));
  } catch (error) {
    console.log("get-classification-error", error);
    dispatch(
      classificationActions.getClassificationFailure(
        error.message || "Failed to get classification details"
      )
    );
  }
};

export const createClassification = (classificationData) => async (dispatch) => {
  try {
    console.log("create-classificationData", classificationData);
    dispatch(classificationActions.createClassificationRequest());

    // Use axiosRequest helper function for POST request
    const response = await axiosRequest(
      dispatch,
      "POST",
      `${route}/`,
      classificationData,
      null
    );

    console.log("create-classification-res-data", response);
    dispatch(classificationActions.createClassificationSuccess(response));
    dispatch(
      classificationActions.updateClassificationList({
        type: "add",
        payload: response?.data,
      })
    );
  } catch (error) {
    console.log("create-classification-error", error);
    dispatch(
      classificationActions.createClassificationFailure(
        error.message || "Failed to create classification"
      )
    );
  }
};

export const updateClassification =
  (classificationData, classificationId) => async (dispatch) => {
    try {
      console.log("update-classificationData-req", classificationId , classificationData);
      dispatch(classificationActions.updateClassificationRequest());

      // Use axiosRequest helper function for PUT request
      const response = await axiosRequest(
        dispatch,
        "PUT",
        `${route}/${classificationId}`,
        classificationData,
        null
      );

      console.log("update-classification-res-data", response);
      dispatch(classificationActions.updateClassificationSuccess(response));
      dispatch(
        classificationActions.updateClassificationList({
          type: "update",
          payload: response?.data,
        })
      );
    } catch (error) {
      console.log("update-classification-error", error);
      dispatch(
        classificationActions.updateClassificationFailure(
          error.message || "Failed to update classification"
        )
      );
    }
  };

export const deleteClassification = (classificationId, confirm = 'true', undo = 'false') => async (dispatch) => {
  try {
    console.log("delete-classificationData", classificationId);
    dispatch(classificationActions.deleteClassificationRequest());

    // Use axiosRequest helper function for DELETE request
    const response = await axiosRequest(
      dispatch,
      "DELETE",
      `${route}/${classificationId}?confirm=${confirm}&undo=${undo}`
    );

    console.log("delete-classification-res-data", response);
    dispatch(classificationActions.deleteClassificationSuccess(response));
    dispatch(
      classificationActions.updateClassificationList({
        type: "delete",
        payload: response?.data,
      })
    );
  } catch (error) {
    console.log("delete-classification-error", error);
    dispatch(
      classificationActions.deleteClassificationFailure(
        error.message || "Failed to delete classification"
      )
    );
  }
};
