import { interactionActions } from "@/redux/slices/interactionSlice";
import { serverURL } from "@/config/config";
import { axiosRequest } from "@/utilities/axiosHelper";

const route = `${serverURL}`;

// export const getAllInteractionClients =
//   ({ industry = "", territory = "" }) =>
//   async (dispatch) => {
//     try {
//       dispatch(interactionActions.getAllInteractionClientsRequest());
//       console.log("getAllInteraction-Clients-request");

//       // Use axiosRequest helper function
//       const response = await axiosRequest(
//         dispatch,
//         "GET",
//         `${route}/client`,
//         null,
//         {
//           config: true,
//           industry,
//           territory,
//         }
//       );

//       console.log("get-all-interaction-client-res-data", response);

//       dispatch(interactionActions.getAllInteractionClientsSuccess(response.clients));
//     } catch (error) {
//       console.log("getAllInteraction-Clients-error", error);

//       dispatch(
//         interactionActions.getAllInteractionClientsFailure(
//           error.message || "Failed to fetch clients data"
//         )
//       );
//     }
//   };

// export const getAllInteractionContacts =
//   ({ client }) =>
//   async (dispatch) => {
//     try {
//       dispatch(interactionActions.getAllInteractionContactsRequest());
//       console.log("getAllInteraction-Contact-request");

//       // Use axiosRequest helper function
//       const response = await axiosRequest(
//         dispatch,
//         "GET",
//         `${route}/contact`,
//         null,
//         {
//           config: true,
//           client,
//         }
//       );

//       console.log("get-all-interaction-contact-res-data", response);

//       dispatch(interactionActions.getAllInteractionContactsSuccess(response.data));
//     } catch (error) {
//       console.log("getAllInteraction-Contact-error", error);

//       dispatch(
//         interactionActions.getAllInteractionContactsFailure(
//           error.message || "Failed to fetch contact data"
//         )
//       );
//     }
//   };

// export const getAllInteractions = () => async (dispatch) => {
//   try {
//     dispatch(interactionActions.getAllInteractionsRequest());
//     console.log("getAllInteraction-request");

//     // Use axiosRequest helper function
//     const response = await axiosRequest(
//       dispatch,
//       "GET",
//       `${route}/interaction`,
//       null,
//       {
//         config: true,
//         client,
//       }
//     );

//     console.log("get-all-interaction-res-data", response);

//     dispatch(interactionActions.getAllInteractionsSuccess(response.data));
//   } catch (error) {
//     console.log("getAllInteraction-error", error);

//     dispatch(
//       interactionActions.getAllInteractionsFailure(
//         error.message || "Failed to fetch interactions data"
//       )
//     );
//   }
// };

// export const createInteraction = (interactionData) => async (dispatch) => {
//   try {
//     console.log("create-interaction-req", interactionData);
//     dispatch(interactionActions.createInteractionRequest());

//     // Make the API call using the axiosRequest helper
//     const response = await axiosRequest(
//       dispatch,
//       "POST", // HTTP method for POST request
//       `${route}/interaction`, // Endpoint for creating interaction
//       interactionData, // Request body (interactionData)
//       null // No query parameters
//     );

//     console.log("create-interaction-res-data", response);
//     dispatch(interactionActions.createInteractionSuccess(response.data.data));
//     // dispatch(
//     //   interactionActions.updateOpportunityList({
//     //     type: "add",
//     //     payload: response.data,
//     //   })
//     // );
//   } catch (error) {
//     dispatch(
//       interactionActions.createInteractionFailure(
//         error.message || "An error occurred"
//       )
//     );
//   }
// };

export const updateInteraction =
  (interactionData, interactionId) => async (dispatch) => {
    try {
      console.log("update-interactionData-req", interactionData);
      dispatch(interactionActions.updateInteractionRequest());

      // Make the API call using the axiosRequest helper
      const response = await axiosRequest(
        dispatch,
        "PUT", // HTTP method for PUT request
        `${route}/interaction/${interactionId}`, // Endpoint for updating interaction by ID
        interactionData, // Request body (interactionData)
        null // No query parameters
      );

      console.log("update-interaction-res-data", response.data);
      dispatch(interactionActions.getInteractionSuccess(response.data));
      dispatch(interactionActions.updateInteractionSuccess(response.data));
    } catch (error) {
      dispatch(
        interactionActions.updateInteractionFailure(
          error.message || "An error occurred"
        )
      );
    }
  };

// export const deleteInteraction =
//   (interactionId, confirm = "false") =>
//   async (dispatch) => {
//     try {
//       console.log("delete-interactionData", interactionId);
//       dispatch(interactionActions.deleteInteractionRequest());

//       // Make the API call using the axiosRequest helper
//       const response = await axiosRequest(
//         dispatch,
//         "DELETE", // HTTP method for DELETE request
//         `${route}/interaction/${interactionId}?confirm=${confirm}` // Endpoint for deleting interaction by ID
//       );

//       console.log("delete-interaction-res-data", response.data);
//       dispatch(interactionActions.deleteInteractionSuccess(response));
//     } catch (error) {
//       dispatch(
//         interactionActions.deleteInteractionFailure(
//           error.message || "An error occurred"
//         )
//       );
//     }
//   };
