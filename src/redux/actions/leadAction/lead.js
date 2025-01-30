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
