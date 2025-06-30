import { axiosRequest } from "@/utilities/axiosHelper";
import { userActions } from "@/redux/slices/userSlice";
import { serverURL } from "@/config/config";
import { mastersConfigActions } from "@/redux/slices/configurationSlice";
const route = `${serverURL}/user`;

export const getAllUsers =
  ({ page = null, limit = null, config = false, deleted = false }) =>
  async (dispatch) => {
    try {
      // Dispatch the appropriate request action based on config flag
      if (config) {
        dispatch(mastersConfigActions.getConfigUsersRequest());
      } else {
        dispatch(userActions.getAllUsersRequest());
      }

      console.log("getAllUsers config", config);

      // Make the API call using the axiosRequest helper
      const response = await axiosRequest(
        dispatch,
        "GET", // HTTP method for GET request
        `${route}/`, // Endpoint for getting users
        null, // No data for GET request
        { limit, page, config, deleted } // Query parameters for pagination and config
      );

      console.log("get-all-user-res-data", response);

      // Dispatch success actions based on config flag
      if (config) {
        dispatch(mastersConfigActions.getConfigUsersSuccess(response?.data));
      } else if (deleted) {
        dispatch(userActions.getAllDeletedUsersSuccess(response?.data));
      } else {
        dispatch(userActions.getAllUsersSuccess(response?.data));
      }
    } catch (error) {
      // If error occurs, handle failure with the specific error message
      if (config) {
        dispatch(mastersConfigActions.getConfigUsersFailure());
      } else if (deleted) {
        dispatch(
          userActions.getAllDeletedUsersFailure(
            error.message || "An error occurred"
          )
        );
      } else {
        dispatch(
          userActions.getAllUsersFailure(error.message || "An error occurred")
        );
      }
    }
  };

export const getUser = (userId) => async (dispatch) => {
  try {
    console.log("get-user-data-by id", userId);
    dispatch(userActions.getUserRequest());

    // Make the API call using the axiosRequest helper
    const response = await axiosRequest(
      dispatch,
      "GET", // HTTP method for GET request
      `${route}/${userId}` // Endpoint for getting user by id
    );

    console.log("get-user-details-res-data", response);
    dispatch(userActions.getUserSuccess(response));
  } catch (error) {
    dispatch(userActions.getUserFailure(error.message || "An error occurred"));
  }
};

export const createUser = (userData) => async (dispatch) => {
  try {
    console.log("create-user-data", userData);
    dispatch(userActions.createUserRequest());

    // Make the API call using the axiosRequest helper
    const formData = new FormData();
    Object.keys(userData).forEach((key) => {
      formData.append(key, userData[key]);
    });
    console.log("user data : ", userData);
    console.log("form data : ", formData);
    const response = await axiosRequest(
      dispatch,
      "POST", // HTTP method for POST request
      `${route}/`, // Endpoint for creating a new user
      formData, // Data to be sent in the request body
      null, // No query parameters
      { "Content-Type": "multipart/form-data" }
    );

    console.log("create-user-res-data", response);
    dispatch(userActions.createUserSuccess(response.data));
    dispatch(
      userActions.updateUserList({
        type: "add",
        payload: response.data.user,
      })
    );
  } catch (error) {
    dispatch(
      userActions.createUserFailure(error.message || "An error occurred")
    );
  }
};

export const updateUser = (userData, userId) => async (dispatch) => {
  try {
    console.log("update-userData-req", userData);
    dispatch(userActions.updateUserRequest());

    // Make the API call using the axiosRequest helper
    const formData = new FormData();
    Object.keys(userData).forEach((key) => {
      formData.append(key, userData[key]);
    });

    const response = await axiosRequest(
      dispatch,
      "PUT",
      `${route}/${userId}`,
      formData, // Send formData instead of JSON
      null, // No query params
      { "Content-Type": "multipart/form-data" } // Set headers
    );

    console.log("update-user-res-data", response.data);

    dispatch(userActions.getUserSuccess(response));
    dispatch(
      userActions.updateUserList({
        type: "update",
        payload: response.data,
      })
    );
    dispatch(userActions.updateUserSuccess(response.data));
  } catch (error) {
    dispatch(
      userActions.updateUserFailure(error.message || "An error occurred")
    );
  }
};

export const deleteUser =
  (userId, confirm = "true", undo = "false") =>
  async (dispatch) => {
    try {
      console.log("delete-userData", userId);
      dispatch(userActions.deleteUserRequest());

      // Make the API call using the axiosRequest helper
      const response = await axiosRequest(
        dispatch,
        "DELETE", // HTTP method for DELETE request
        `${route}/${userId}?undo=${undo}&confirm=${confirm}` // Endpoint for deleting a user by ID
      );

      console.log("delete-user-res-data", response.data);
      dispatch(userActions.deleteUserSuccess(response.data));
      dispatch(
        userActions.updateUserList({
          type: "delete",
          payload: response.data.user,
        })
      );
    } catch (error) {
      dispatch(
        userActions.deleteUserFailure(error.message || "An error occurred")
      );
    }
  };
