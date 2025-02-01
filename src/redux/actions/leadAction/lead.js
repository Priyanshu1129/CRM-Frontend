import { leadActions } from "@/redux/slices/leadSlice";
import { serverURL } from "@/config/config";
import { axiosRequest } from "@/utilities/axiosHelper";

const route = `${serverURL}`;

export const getAllLeadClients =
  ({ industry = "", territory = "" }) =>
  async (dispatch) => {
    try {
      dispatch(leadActions.getAllLeadClientsRequest());
      console.log("getAllLead-Clients-request");

      // Use axiosRequest helper function
      const response = await axiosRequest(
        dispatch,
        "GET",
        `${route}/client`,
        null,
        {
          config: true,
          industry,
          territory,
        }
      );

      console.log("get-all-lead-client-res-data", response);

      dispatch(leadActions.getAllLeadClientsSuccess(response.clients));
    } catch (error) {
      console.log("getAllLead-Clients-error", error);

      dispatch(
        leadActions.getAllLeadClientsFailure(
          error.message || "Failed to fetch clients data"
        )
      );
    }
  };

export const getAllLeadContacts =
  ({ client }) =>
  async (dispatch) => {
    try {
      dispatch(leadActions.getAllLeadContactsRequest());
      console.log("getAllLead-Contact-request");

      // Use axiosRequest helper function
      const response = await axiosRequest(
        dispatch,
        "GET",
        `${route}/contact`,
        null,
        {
          config: true,
          client,
        }
      );

      console.log("get-all-lead-contact-res-data", response);

      dispatch(leadActions.getAllLeadContactsSuccess(response.data));
    } catch (error) {
      console.log("getAllLead-Contact-error", error);

      dispatch(
        leadActions.getAllLeadContactsFailure(
          error.message || "Failed to fetch contact data"
        )
      );
    }
  };

export const getAllLeads =
  ({
    page = null,
    limit = null,
    config = false,
    industry = "",
    subIndustry = "",
    territory = "",
    enteredBy = "",
    client,
    entryDate,
  }) =>
  async (dispatch) => {
    try {
      dispatch(leadActions.getAllLeadsRequest());
      console.log("getAllLead-request");

      // Use axiosRequest helper function
      const response = await axiosRequest(
        dispatch,
        "GET",
        `${route}/lead`,
        null,
        {
          limit,
          page,
          config,
          industry,
          subIndustry,
          territory,
          enteredBy,
          client,
          entry_date: entryDate,
        }
      );

      console.log("get-all-lead-res-data", response);

      dispatch(leadActions.getAllLeadsSuccess(response.data));
    } catch (error) {
      console.log("getAllLead-error", error);

      dispatch(
        leadActions.getAllLeadsFailure(
          error.message || "Failed to fetch leads data"
        )
      );
    }
  };

export const createLead = (leadData) => async (dispatch) => {
  try {
    console.log("create-lead-req", leadData);
    dispatch(leadActions.createLeadRequest());

    // Make the API call using the axiosRequest helper
    const response = await axiosRequest(
      dispatch,
      "POST", // HTTP method for POST request
      `${route}/lead`, // Endpoint for creating lead
      leadData, // Request body (leadData)
      null // No query parameters
    );

    console.log("create-lead-res-data", response);
    dispatch(leadActions.createLeadSuccess(response.data));
    // dispatch(
    //   leadActions.updateOpportunityList({
    //     type: "add",
    //     payload: response.data,
    //   })
    // );
  } catch (error) {
    dispatch(
      leadActions.createLeadFailure(error.message || "An error occurred")
    );
  }
};

export const updateLead = (leadData, leadId) => async (dispatch) => {
  try {
    console.log("update-leadData-req", leadData);
    dispatch(leadActions.updateLeadRequest());

    // Make the API call using the axiosRequest helper
    const response = await axiosRequest(
      dispatch,
      "PUT", // HTTP method for PUT request
      `${route}/lead/${leadId}`, // Endpoint for updating lead by ID
      leadData, // Request body (leadData)
      null // No query parameters
    );

    console.log("update-lead-res-data", response.data);
    dispatch(leadActions.getLeadSuccess(response.data));
    dispatch(leadActions.updateLeadSuccess(response.data));
  } catch (error) {
    dispatch(
      leadActions.updateLeadFailure(error.message || "An error occurred")
    );
  }
};

export const deleteLead =
  (leadId, confirm = "false") =>
  async (dispatch) => {
    try {
      console.log("delete-leadData", leadId);
      dispatch(leadActions.deleteLeadRequest());

      // Make the API call using the axiosRequest helper
      const response = await axiosRequest(
        dispatch,
        "DELETE", // HTTP method for DELETE request
        `${route}/lead/${leadId}?confirm=${confirm}` // Endpoint for deleting lead by ID
      );

      console.log("delete-lead-res-data", response.data);
      dispatch(leadActions.deleteLeadSuccess(response));
    } catch (error) {
      dispatch(
        leadActions.deleteLeadFailure(error.message || "An error occurred")
      );
    }
  };
