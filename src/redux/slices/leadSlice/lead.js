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
  getLead: {
    status: "idle",
    error: null,
    data: null,
  },
  getAllLeads: {
    status: "idle",
    error: null,
    data: null,
  },
  createLead: {
    status: "idle",
    error: null,
    data: null,
  },
  updateLead: {
    status: "idle",
    error: null,
    data: null,
  },
  deleteLead: {
    status: "idle",
    error: null,
    data: null,
  },
  convertLead: {
    data: null,
  },
};

const leadSlice = createSlice({
  name: "lead",
  initialState: initialLeadState,
  reducers: {
    // get all leads states
    getAllLeadsRequest: (state, action) => {
      state.getAllLeads.status = "pending";
    },
    getAllLeadsSuccess: (state, action) => {
      state.getAllLeads.status = "success";
      state.getAllLeads.data = action.payload;
    },
    getAllLeadsFailure: (state, action) => {
      state.getAllLeads.status = "failed";
      state.getAllLeads.error = action.payload;
    },

    //lead clients states
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

    // lead contacts states
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

    // get lead states
    getLeadRequest: (state, action) => {
      state.getLead.status = "pending";
    },
    getLeadSuccess: (state, action) => {
      state.getLead.status = "success";
      state.getLead.data = action.payload;
    },
    getLeadFailure: (state, action) => {
      state.getLead.status = "failed";
      state.getLead.error = action.payload;
    },

    // create lead states
    createLeadRequest: (state, action) => {
      state.createLead.status = "pending";
    },
    createLeadSuccess: (state, action) => {
      state.createLead.status = "success";
      state.createLead.data = action.payload;
    },
    createLeadFailure: (state, action) => {
      state.createLead.status = "failed";
      state.createLead.data = null;
      state.createLead.error = action.payload;
    },

    // update lead states
    updateLeadRequest: (state, action) => {
      state.updateLead.status = "pending";
    },
    updateLeadSuccess: (state, action) => {
      state.updateLead.status = "success";
      state.updateLead.data = action.payload;
    },
    updateLeadFailure: (state, action) => {
      state.updateLead.status = "failed";
      state.updateLead.error = action.payload;
    },

    // delete lead states
    deleteLeadRequest: (state) => {
      state.deleteLead.status = "pending";
    },
    deleteLeadSuccess: (state, action) => {
      state.deleteLead.status = "success";
      state.deleteLead.data = action.payload;
    },
    deleteLeadFailure: (state, action) => {
      state.deleteLead.status = "failed";
      state.deleteLead.error = action.payload;
    },

    // clear get lead details states
    clearGetLeadStatus: (state) => {
      state.getLead.status = "idle";
    },
    clearGetLeadData: () => {
      state.getLead.data = null;
    },
    clearGetLeadError: (state) => {
      state.getLead.error = null;
    },

    // clear lead clients states
    clearGetAllLeadClientsStatus: (state) => {
      state.getAllLeadClients.status = "idle";
    },
    clearGetAllLeadClientsData: (state) => {
      state.getAllLeadClients.data = null;
    },
    clearGetAllLeadClientsError: (state) => {
      state.getAllLeadClients.error = null;
    },

    // clear lead contacts states
    clearGetAllLeadContactsStatus: (state) => {
      state.getAllLeadContacts.status = "idle";
    },
    clearGetAllLeadContactsData: (state) => {
      state.getAllLeadContacts.data = null;
    },
    clearGetAllLeadContactsError: (state) => {
      state.getAllLeadContacts.error = null;
    },

    // clear get all leads states
    clearGetAllLeadsStatus: (state) => {
      state.getAllLeads.status = "idle";
    },
    clearGetAllLeadsData: () => {
      state.getAllLeads.data = null;
    },
    clearGetAllLeadsError: (state) => {
      state.getAllLeads.error = null;
    },

    // clear create lead states
    clearCreateLeadStatus: (state) => {
      state.createLead.status = "idle";
    },
    clearCreateLeadData: () => {
      state.createLead.data = null;
    },
    clearCreateLeadError: (state) => {
      state.createLead.error = null;
    },

    // clear update lead states
    clearUpdateLeadStatus: (state) => {
      state.updateLead.status = "idle";
    },
    clearUpdateLeadData: () => {
      state.updateLead.data = null;
    },
    clearUpdateLeadError: (state) => {
      state.updateLead.error = null;
    },

    // delete lead states
    clearDeleteLeadStatus: (state) => {
      state.deleteLead.status = "idle";
    },
    clearDeleteLeadData: () => {
      state.deleteLead.data = null;
    },
    clearDeleteLeadError: (state) => {
      state.deleteLead.error = null;
    },

    // convert lead states
    setConvertLead: (state, action) => {
      state.convertLead.data = action.payload;
    },
    unsetConvertLead: (state) => {
      state.convertLead.data = null;
    },
  },
});

export const leadActions = leadSlice.actions;
export const leadReducer = leadSlice.reducer;
