import { createSlice } from "@reduxjs/toolkit";

const initialRelationshipDegreeState = {
  getRelationshipDegree: {
    status: "idle",
    error: null,
    data: null,
  },
  getAllRelationshipDegrees: {
    status: "idle",
    error: null,
    data: null,
  },
  createRelationshipDegree: {
    status: "idle",
    error: null,
    data: null,
  },
  updateRelationshipDegree: {
    status: "idle",
    error: null,
    data: null,
  },
  deleteRelationshipDegree: {
    status: "idle",
    error: null,
    data: null,
  },
};

const relationshipDegreeSlice = createSlice({
  name: "relationshipDegree",
  initialState: initialRelationshipDegreeState,
  reducers: {
    getRelationshipDegreeRequest: (state) => {
      state.getRelationshipDegree.status = "pending";
    },
    getRelationshipDegreeSuccess: (state, action) => {
      state.getRelationshipDegree.status = "success";
      state.getRelationshipDegree.data = action.payload;
    },
    getRelationshipDegreeFailure: (state, action) => {
      state.getRelationshipDegree.status = "failed";
      state.getRelationshipDegree.error = action.payload;
    },
    getAllRelationshipDegreesRequest: (state) => {
      state.getAllRelationshipDegrees.status = "pending";
    },
    getAllRelationshipDegreesSuccess: (state, action) => {
      state.getAllRelationshipDegrees.status = "success";
      state.getAllRelationshipDegrees.data = action.payload;
    },
    getAllRelationshipDegreesFailure: (state, action) => {
      state.getAllRelationshipDegrees.status = "failed";
      state.getAllRelationshipDegrees.error = action.payload;
    },
    createRelationshipDegreeRequest: (state) => {
      state.createRelationshipDegree.status = "pending";
    },
    createRelationshipDegreeSuccess: (state, action) => {
      state.createRelationshipDegree.status = "success";
      state.createRelationshipDegree.data = action.payload;
    },
    createRelationshipDegreeFailure: (state, action) => {
      state.createRelationshipDegree.status = "failed";
      state.createRelationshipDegree.error = action.payload;
    },
    updateRelationshipDegreeRequest: (state) => {
      state.updateRelationshipDegree.status = "pending";
    },
    updateRelationshipDegreeSuccess: (state, action) => {
      state.updateRelationshipDegree.status = "success";
      state.updateRelationshipDegree.data = action.payload;
    },
    updateRelationshipDegreeFailure: (state, action) => {
      state.updateRelationshipDegree.status = "failed";
      state.updateRelationshipDegree.error = action.payload;
    },
    deleteRelationshipDegreeRequest: (state) => {
      state.deleteRelationshipDegree.status = "pending";
    },
    deleteRelationshipDegreeSuccess: (state, action) => {
      state.deleteRelationshipDegree.status = "success";
      state.deleteRelationshipDegree.data = action.payload;
    },
    deleteRelationshipDegreeFailure: (state, action) => {
      state.deleteRelationshipDegree.status = "failed";
      state.deleteRelationshipDegree.error = action.payload;
    },
    clearGetRelationshipDegreeStatus: (state) => {
      state.getRelationshipDegree.status = "idle";
    },
    clearGetRelationshipDegreeData: (state) => {
      state.getRelationshipDegree.data = null;
    },
    clearGetRelationshipDegreeError: (state) => {
      state.getRelationshipDegree.error = null;
    },
    clearGetAllRelationshipDegreesStatus: (state) => {
      state.getAllRelationshipDegrees.status = "idle";
    },
    clearGetAllRelationshipDegreesData: (state) => {
      state.getAllRelationshipDegrees.data = null;
    },
    clearGetAllRelationshipDegreesError: (state) => {
      state.getAllRelationshipDegrees.error = null;
    },
    clearCreateRelationshipDegreeStatus: (state) => {
      state.createRelationshipDegree.status = "idle";
    },
    clearCreateRelationshipDegreeData: (state) => {
      state.createRelationshipDegree.data = null;
    },
    clearCreateRelationshipDegreeError: (state) => {
      state.createRelationshipDegree.error = null;
    },
    clearUpdateRelationshipDegreeStatus: (state) => {
      state.updateRelationshipDegree.status = "idle";
    },
    clearUpdateRelationshipDegreeData: (state) => {
      state.updateRelationshipDegree.data = null;
    },
    clearUpdateRelationshipDegreeError: (state) => {
      state.updateRelationshipDegree.error = null;
    },
    clearDeleteRelationshipDegreeStatus: (state) => {
      state.deleteRelationshipDegree.status = "idle";
    },
    clearDeleteRelationshipDegreeData: (state) => {
      state.deleteRelationshipDegree.data = null;
    },
    clearDeleteRelationshipDegreeError: (state) => {
      state.deleteRelationshipDegree.error = null;
    },
    updateRelationshipDegreeList: (state, action) => {
      const { type, payload } = action.payload;

      if (!Array.isArray(state.getAllRelationshipDegrees?.data?.data)) {
        state.getAllRelationshipDegrees.data = {
          ...state.getAllRelationshipDegrees.data,
          data: [],
        };
      }

      switch (type) {
        case "add": {
          state.getAllRelationshipDegrees.data.data = [
            payload,
            ...state.getAllRelationshipDegrees.data.data,
          ];
          break;
        }
        case "update": {
          const index = state.getAllRelationshipDegrees.data.data.findIndex(
            (degree) => degree._id.toString() === payload?._id.toString()
          );
          if (index !== -1) {
            state.getAllRelationshipDegrees.data.data[index] = payload;
          }
          break;
        }
        case "delete": {
          state.getAllRelationshipDegrees.data.data = state.getAllRelationshipDegrees.data.data.filter(
            (degree) => degree._id.toString() !== payload._id.toString()
          );
          break;
        }
        default:
          console.warn(`Unhandled type: ${type}`);
      }
    },
  },
});

export const relationshipDegreeActions = relationshipDegreeSlice.actions;
export const relationshipDegreeReducer = relationshipDegreeSlice.reducer;
