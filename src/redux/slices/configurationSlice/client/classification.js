import { createSlice } from "@reduxjs/toolkit";

const initialClassificationState = {
  getClassification: {
    status: "idle",
    error: null,
    data: null,
  },
  getAllClassifications: {
    status: "idle",
    error: null,
    data: null,
  },
  createClassification: {
    status: "idle",
    error: null,
    data: null,
  },
  updateClassification: {
    status: "idle",
    error: null,
    data: null,
  },
  deleteClassification: {
    status: "idle",
    error: null,
    data: null,
  },
};

const classificationSlice = createSlice({
  name: "classification",
  initialState: initialClassificationState,
  reducers: {
    getClassificationRequest: (state) => {
      state.getClassification.status = "pending";
    },
    getClassificationSuccess: (state, action) => {
      state.getClassification.status = "success";
      state.getClassification.data = action.payload;
    },
    getClassificationFailure: (state, action) => {
      state.getClassification.status = "failed";
      state.getClassification.error = action.payload;
    },
    getAllClassificationsRequest: (state) => {
      state.getAllClassifications.status = "pending";
    },
    getAllClassificationsSuccess: (state, action) => {
      state.getAllClassifications.status = "success";
      state.getAllClassifications.data = action.payload;
    },
    getAllClassificationsFailure: (state, action) => {
      state.getAllClassifications.status = "failed";
      state.getAllClassifications.error = action.payload;
    },
    createClassificationRequest: (state) => {
      state.createClassification.status = "pending";
    },
    createClassificationSuccess: (state, action) => {
      state.createClassification.status = "success";
      state.createClassification.data = action.payload;
    },
    createClassificationFailure: (state, action) => {
      state.createClassification.status = "failed";
      state.createClassification.error = action.payload;
    },
    updateClassificationRequest: (state) => {
      state.updateClassification.status = "pending";
    },
    updateClassificationSuccess: (state, action) => {
      state.updateClassification.status = "success";
      state.updateClassification.data = action.payload;
    },
    updateClassificationFailure: (state, action) => {
      state.updateClassification.status = "failed";
      state.updateClassification.error = action.payload;
    },
    deleteClassificationRequest: (state) => {
      state.deleteClassification.status = "pending";
    },
    deleteClassificationSuccess: (state, action) => {
      state.deleteClassification.status = "success";
      state.deleteClassification.data = action.payload;
    },
    deleteClassificationFailure: (state, action) => {
      state.deleteClassification.status = "failed";
      state.deleteClassification.error = action.payload;
    },
    clearGetClassificationStatus: (state) => {
      state.getClassification.status = "idle";
    },
    clearGetClassificationData: (state) => {
      state.getClassification.data = null;
    },
    clearGetClassificationError: (state) => {
      state.getClassification.error = null;
    },
    clearGetAllClassificationsStatus: (state) => {
      state.getAllClassifications.status = "idle";
    },
    clearGetAllClassificationsData: (state) => {
      state.getAllClassifications.data = null;
    },
    clearGetAllClassificationsError: (state) => {
      state.getAllClassifications.error = null;
    },
    clearCreateClassificationStatus: (state) => {
      state.createClassification.status = "idle";
    },
    clearCreateClassificationData: (state) => {
      state.createClassification.data = null;
    },
    clearCreateClassificationError: (state) => {
      state.createClassification.error = null;
    },
    clearUpdateClassificationStatus: (state) => {
      state.updateClassification.status = "idle";
    },
    clearUpdateClassificationData: (state) => {
      state.updateClassification.data = null;
    },
    clearUpdateClassificationError: (state) => {
      state.updateClassification.error = null;
    },
    clearDeleteClassificationStatus: (state) => {
      state.deleteClassification.status = "idle";
    },
    clearDeleteClassificationData: (state) => {
      state.deleteClassification.data = null;
    },
    clearDeleteClassificationError: (state) => {
      state.deleteClassification.error = null;
    },
    updateClassificationList: (state, action) => {
      const { type, payload } = action.payload;
      
      if (!Array.isArray(state.getAllClassifications?.data?.data)) {
        state.getAllClassifications.data = {
          ...state.getAllClassifications.data,
          data: [],
        };
      }
      
      switch (type) {
        case "add": {
          state.getAllClassifications.data.data = [
            payload,
            ...state.getAllClassifications.data.data,
          ];
          break;
        }
        case "update": {
          const index = state.getAllClassifications.data.data.findIndex(
            (classification) => classification._id.toString() === payload?._id.toString()
          );
          if (index !== -1) {
            state.getAllClassifications.data.data[index] = payload;
          }
          break;
        }
        case "delete": {
          state.getAllClassifications.data.data = state.getAllClassifications.data.data.filter(
            (classification) => classification._id.toString() !== payload._id.toString()
          );
          break;
        }
        default:
          console.warn(`Unhandled type: ${type}`);
      }
    },
  },
});

export const classificationActions = classificationSlice.actions;
export const classificationReducer = classificationSlice.reducer;
