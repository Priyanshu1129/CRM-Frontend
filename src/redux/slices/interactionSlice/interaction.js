import { createSlice } from "@reduxjs/toolkit";

const initialInteractionState = {
  getAllInteractionClients: {
    status: "idle",
    error: null,
    data: null,
  },
  getAllInteractionContacts: {
    status: "idle",
    error: null,
    data: null,
  },
  getClientAllLeads: {
    status: "idle",
    error: null,
    data: null,
  },
  // getInteraction: {
  //   status: "idle",
  //   error: null,
  //   data: null,
  // },
  // getAllInteractions: {
  //   status: "idle",
  //   error: null,
  //   data: null,
  // },
  // createInteraction: {
  //   status: "idle",
  //   error: null,
  //   data: null,
  // },
  updateInteraction: {
    status: "idle",
    error: null,
    data: null,
  },
  // deleteInteraction: {
  //   status: "idle",
  //   error: null,
  //   data: null,
  // },
};

const interactionSlice = createSlice({
  name: "interaction",
  initialState: initialInteractionState,
  reducers: {
    // // get all interactions states
    // getAllInteractionsRequest: (state, action) => {
    //   state.getAllInteractions.status = "pending";
    // },
    // getAllInteractionsSuccess: (state, action) => {
    //   state.getAllInteractions.status = "success";
    //   state.getAllInteractions.data = action.payload;
    // },
    // getAllInteractionsFailure: (state, action) => {
    //   state.getAllInteractions.status = "failed";
    //   state.getAllInteractions.error = action.payload;
    // },

    //interaction clients states
    getAllInteractionClientsRequest: (state, action) => {
      state.getAllInteractionClients.status = "pending";
    },
    getAllInteractionClientsSuccess: (state, action) => {
      state.getAllInteractionClients.status = "success";
      state.getAllInteractionClients.data = action.payload;
    },
    getAllInteractionClientsFailure: (state, action) => {
      state.getAllInteractionClients.status = "failed";
      state.getAllInteractionClients.error = action.payload;
    },

    // interaction contacts states
    getAllInteractionContactsRequest: (state, action) => {
      state.getAllInteractionContacts.status = "pending";
    },
    getAllInteractionContactsSuccess: (state, action) => {
      state.getAllInteractionContacts.status = "success";
      state.getAllInteractionContacts.data = action.payload;
    },
    getAllInteractionContactsFailure: (state, action) => {
      state.getAllInteractionContacts.status = "failed";
      state.getAllInteractionContacts.error = action.payload;
    },

    //clients leads states
    getClientAllLeadsRequest: (state, action) => {
      state.getClientAllLeads.status = "pending";
    },
    getClientAllLeadsSuccess: (state, action) => {
      state.getClientAllLeads.status = "success";
      state.getClientAllLeads.data = action.payload;
    },
    getClientAllLeadsFailure: (state, action) => {
      state.getClientAllLeads.status = "failed";
      state.getClientAllLeads.error = action.payload;
    },

    // get interaction states
    // getInteractionRequest: (state, action) => {
    //   state.getInteraction.status = "pending";
    // },
    // getInteractionSuccess: (state, action) => {
    //   state.getInteraction.status = "success";
    //   state.getInteraction.data = action.payload;
    // },
    // getInteractionFailure: (state, action) => {
    //   state.getInteraction.status = "failed";
    //   state.getInteraction.error = action.payload;
    // },

    // create interaction states
    // createInteractionRequest: (state, action) => {
    //   state.createInteraction.status = "pending";
    // },
    // createInteractionSuccess: (state, action) => {
    //   state.createInteraction.status = "success";
    //   state.createInteraction.data = action.payload;
    // },
    // createInteractionFailure: (state, action) => {
    //   state.createInteraction.status = "failed";
    //   state.createInteraction.data = null;
    //   state.createInteraction.error = action.payload;
    // },

    // update interaction states
    updateInteractionRequest: (state, action) => {
      state.updateInteraction.status = "pending";
    },
    updateInteractionSuccess: (state, action) => {
      state.updateInteraction.status = "success";
      state.updateInteraction.data = action.payload;
    },
    updateInteractionFailure: (state, action) => {
      state.updateInteraction.status = "failed";
      state.updateInteraction.error = action.payload;
    },

    // delete interaction states
    // deleteInteractionRequest: (state) => {
    //   state.deleteInteraction.status = "pending";
    // },
    // deleteInteractionSuccess: (state, action) => {
    //   state.deleteInteraction.status = "success";
    //   state.deleteInteraction.data = action.payload;
    // },
    // deleteInteractionFailure: (state, action) => {
    //   state.deleteInteraction.status = "failed";
    //   state.deleteInteraction.error = action.payload;
    // },

    // clear get interaction details states
    // clearGetInteractionStatus: (state) => {
    //   state.getInteraction.status = "idle";
    // },
    // clearGetInteractionData: () => {
    //   state.getInteraction.data = null;
    // },
    // clearGetInteractionError: (state) => {
    //   state.getInteraction.error = null;
    // },

    // clear interaction clients states
    clearGetAllInteractionClientsStatus: (state) => {
      state.getAllInteractionClients.status = "idle";
    },
    clearGetAllInteractionClientsData: (state) => {
      state.getAllInteractionClients.data = null;
    },
    clearGetAllInteractionClientsError: (state) => {
      state.getAllInteractionClients.error = null;
    },

    // // clear interaction contacts states
    clearGetAllInteractionContactsStatus: (state) => {
      state.getAllInteractionContacts.status = "idle";
    },
    clearGetAllInteractionContactsData: (state) => {
      state.getAllInteractionContacts.data = null;
    },
    clearGetAllInteractionContactsError: (state) => {
      state.getAllInteractionContacts.error = null;
    },

    // // clear interaction contacts states
    clearGetClientAllLeadsStatus: (state) => {
      state.getClientAllLeads.status = "idle";
    },
    clearGetClientAllLeadsData: (state) => {
      state.getClientAllLeads.data = null;
    },
    clearGetClientAllLeadsError: (state) => {
      state.getClientAllLeads.error = null;
    },

    // clear get all interactions states
    // clearGetAllInteractionsStatus: (state) => {
    //   state.getAllInteractions.status = "idle";
    // },
    // clearGetAllInteractionsData: () => {
    //   state.getAllInteractions.data = null;
    // },
    // clearGetAllInteractionsError: (state) => {
    //   state.getAllInteractions.error = null;
    // },

    // clear create interaction states
    // clearCreateInteractionStatus: (state) => {
    //   state.createInteraction.status = "idle";
    // },
    // clearCreateInteractionData: () => {
    //   state.createInteraction.data = null;
    // },
    // clearCreateInteractionError: (state) => {
    //   state.createInteraction.error = null;
    // },

    // clear update interaction states
    clearUpdateInteractionStatus: (state) => {
      state.updateInteraction.status = "idle";
    },
    clearUpdateInteractionData: (state) => {
      state.updateInteraction.data = null;
    },
    clearUpdateInteractionError: (state) => {
      state.updateInteraction.error = null;
    },

    // delete interaction states
    // clearDeleteInteractionStatus: (state) => {
    //   state.deleteInteraction.status = "idle";
    // },
    // clearDeleteInteractionData: () => {
    //   state.deleteInteraction.data = null;
    // },
    // clearDeleteInteractionError: (state) => {
    //   state.deleteInteraction.error = null;
    // },
  },
});

export const interactionActions = interactionSlice.actions;
export const interactionReducer = interactionSlice.reducer;
