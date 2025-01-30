import { createSlice } from "@reduxjs/toolkit";

const initialLeadState = {
  getAllLeadClients: {
    status: "idle",
    error: null,
    data: null,
  },
  getAllLeadContacts: {
    status: "idle",
    error: null,
    data: null,
  },
};

const leadSlice = createSlice({
  name: "lead",
  initialState: initialLeadState,
  reducers: {
    // getClientRequest: (state, action) => {
    //   state.getClient.status = "pending";
    // },
    // getClientSuccess: (state, action) => {
    //   state.getClient.status = "success";
    //   state.getClient.data = action.payload;
    // },
    // getClientFailure: (state, action) => {
    //   state.getClient.status = "failed";
    //   state.getClient.error = action.payload;
    // },

    //lead clients
    getAllLeadClientsRequest: (state, action) => {
      state.getAllLeadClients.status = "pending";
    },
    getAllLeadClientsSuccess: (state, action) => {
      state.getAllLeadClients.status = "success";
      state.getAllLeadClients.data = action.payload;
    },
    getAllLeadClientsFailure: (state, action) => {
      state.getAllLeadClients.status = "failed";
      state.getAllLeadClients.error = action.payload;
    },

    // lead contacts
    getAllLeadContactsRequest: (state, action) => {
      state.getAllLeadContacts.status = "pending";
    },
    getAllLeadContactsSuccess: (state, action) => {
      state.getAllLeadContacts.status = "success";
      state.getAllLeadContacts.data = action.payload;
    },
    getAllLeadContactsFailure: (state, action) => {
      state.getAllLeadContacts.status = "failed";
      state.getAllLeadContacts.error = action.payload;
    },
    // createClientRequest: (state, action) => {
    //   state.createClient.status = "pending";
    // },
    // createClientSuccess: (state, action) => {
    //   state.createClient.status = "success";
    //   state.createClient.data = action.payload;
    // },
    // createClientFailure: (state, action) => {
    //   state.createClient.status = "failed";
    //   state.createClient.data = null;
    //   state.createClient.error = action.payload;
    // },
    // updateClientRequest: (state, action) => {
    //   state.updateClient.status = "pending";
    // },
    // updateClientSuccess: (state, action) => {
    //   state.updateClient.status = "success";
    //   state.updateClient.data = action.payload;
    // },
    // updateClientFailure: (state, action) => {
    //   state.updateClient.status = "failed";
    //   state.updateClient.error = action.payload;
    // },
    // deleteClientRequest: (state) => {
    //   state.deleteClient.status = "pending";
    // },
    // deleteClientSuccess: (state, action) => {
    //   state.deleteClient.status = "success";
    //   state.deleteClient.data = action.payload;
    // },
    // deleteClientFailure: (state, action) => {
    //   state.deleteClient.status = "failed";
    //   state.deleteClient.error = action.payload;
    // },
    // clearGetClientStatus: (state) => {
    //   state.getClient.status = "idle";
    // },
    // clearGetClientData: () => {
    //   state.getClient.data = null;
    // },
    // clearGetClientError: (state) => {
    //   state.getClient.error = null;
    // },

    // clear lead clients states
    clearGetAllLeadClientsStatus: (state) => {
      state.getAllLeadClients.status = "idle";
    },
    clearGetAllLeadClientsData: () => {
      state.getAllLeadClients.data = null;
    },
    clearGetAllLeadClientsError: (state) => {
      state.getAllLeadClients.error = null;
    },

    // clear lead contacts states
    clearGetAllLeadContactsStatus: (state) => {
      state.getAllLeadContacts.status = "idle";
    },
    clearGetAllLeadContactsData: () => {
      state.getAllLeadContacts.data = null;
    },
    clearGetAllLeadContactsError: (state) => {
      state.getAllLeadContacts.error = null;
    },
    // clearCreateClientStatus: (state) => {
    //   state.createClient.status = "idle";
    // },
    // clearCreateClientData: () => {
    //   state.createClient.data = null;
    // },
    // clearCreateClientError: (state) => {
    //   state.createClient.error = null;
    // },
    // clearUpdateClientStatus: (state) => {
    //   state.updateClient.status = "idle";
    // },
    // clearUpdateClientData: () => {
    //   state.updateClient.data = null;
    // },
    // clearUpdateClientError: (state) => {
    //   state.updateClient.error = null;
    // },
    // clearDeleteClientStatus: (state) => {
    //   state.deleteClient.status = "idle";
    // },
    // clearDeleteClientData: () => {
    //   state.deleteClient.data = null;
    // },
    // clearDeleteClientError: (state) => {
    //   state.deleteClient.error = null;
    // },
  },
});

export const leadActions = leadSlice.actions;
export const leadReducer = leadSlice.reducer;
