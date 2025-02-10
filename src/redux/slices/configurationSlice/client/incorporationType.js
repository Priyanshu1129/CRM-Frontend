import { createSlice } from "@reduxjs/toolkit";

const initialIncorporationTypeState = {
  getIncorporationType: {
    status: "idle",
    error: null,
    data: null,
  },
  getAllIncorporationTypes: {
    status: "idle",
    error: null,
    data: null,
  },
  createIncorporationType: {
    status: "idle",
    error: null,
    data: null,
  },
  updateIncorporationType: {
    status: "idle",
    error: null,
    data: null,
  },
  deleteIncorporationType: {
    status: "idle",
    error: null,
    data: null,
  },
};

const incorporationTypeSlice = createSlice({
  name: "incorporationType",
  initialState: initialIncorporationTypeState,
  reducers: {
    getIncorporationTypeRequest: (state) => {
      state.getIncorporationType.status = "pending";
    },
    getIncorporationTypeSuccess: (state, action) => {
      state.getIncorporationType.status = "success";
      state.getIncorporationType.data = action.payload;
    },
    getIncorporationTypeFailure: (state, action) => {
      state.getIncorporationType.status = "failed";
      state.getIncorporationType.error = action.payload;
    },
    getAllIncorporationTypesRequest: (state) => {
      state.getAllIncorporationTypes.status = "pending";
    },
    getAllIncorporationTypesSuccess: (state, action) => {
      state.getAllIncorporationTypes.status = "success";
      state.getAllIncorporationTypes.data = action.payload;
    },
    getAllIncorporationTypesFailure: (state, action) => {
      state.getAllIncorporationTypes.status = "failed";
      state.getAllIncorporationTypes.error = action.payload;
    },
    createIncorporationTypeRequest: (state) => {
      state.createIncorporationType.status = "pending";
    },
    createIncorporationTypeSuccess: (state, action) => {
      state.createIncorporationType.status = "success";
      state.createIncorporationType.data = action.payload;
    },
    createIncorporationTypeFailure: (state, action) => {
      state.createIncorporationType.status = "failed";
      state.createIncorporationType.error = action.payload;
    },
    updateIncorporationTypeRequest: (state) => {
      state.updateIncorporationType.status = "pending";
    },
    updateIncorporationTypeSuccess: (state, action) => {
      state.updateIncorporationType.status = "success";
      state.updateIncorporationType.data = action.payload;
    },
    updateIncorporationTypeFailure: (state, action) => {
      state.updateIncorporationType.status = "failed";
      state.updateIncorporationType.error = action.payload;
    },
    deleteIncorporationTypeRequest: (state) => {
      state.deleteIncorporationType.status = "pending";
    },
    deleteIncorporationTypeSuccess: (state, action) => {
      state.deleteIncorporationType.status = "success";
      state.deleteIncorporationType.data = action.payload;
    },
    deleteIncorporationTypeFailure: (state, action) => {
      state.deleteIncorporationType.status = "failed";
      state.deleteIncorporationType.error = action.payload;
    },
    clearGetIncorporationTypeStatus: (state) => {
      state.getIncorporationType.status = "idle";
    },
    clearGetIncorporationTypeData: (state) => {
      state.getIncorporationType.data = null;
    },
    clearGetIncorporationTypeError: (state) => {
      state.getIncorporationType.error = null;
    },
    clearGetAllIncorporationTypesStatus: (state) => {
      state.getAllIncorporationTypes.status = "idle";
    },
    clearGetAllIncorporationTypesData: (state) => {
      state.getAllIncorporationTypes.data = null;
    },
    clearGetAllIncorporationTypesError: (state) => {
      state.getAllIncorporationTypes.error = null;
    },
    clearCreateIncorporationTypeStatus: (state) => {
      state.createIncorporationType.status = "idle";
    },
    clearCreateIncorporationTypeData: (state) => {
      state.createIncorporationType.data = null;
    },
    clearCreateIncorporationTypeError: (state) => {
      state.createIncorporationType.error = null;
    },
    clearUpdateIncorporationTypeStatus: (state) => {
      state.updateIncorporationType.status = "idle";
    },
    clearUpdateIncorporationTypeData: (state) => {
      state.updateIncorporationType.data = null;
    },
    clearUpdateIncorporationTypeError: (state) => {
      state.updateIncorporationType.error = null;
    },
    clearDeleteIncorporationTypeStatus: (state) => {
      state.deleteIncorporationType.status = "idle";
    },
    clearDeleteIncorporationTypeData: (state) => {
      state.deleteIncorporationType.data = null;
    },
    clearDeleteIncorporationTypeError: (state) => {
      state.deleteIncorporationType.error = null;
    },
    updateIncorporationTypeList: (state, action) => {
      const { type, payload } = action.payload;

      if (!Array.isArray(state.getAllIncorporationTypes?.data?.data)) {
        state.getAllIncorporationTypes.data = {
          ...state.getAllIncorporationTypes.data,
          data: [],
        };
      }

      switch (type) {
        case "add": {
          state.getAllIncorporationTypes.data.data = [
            payload,
            ...state.getAllIncorporationTypes.data.data,
          ];
          break;
        }
        case "update": {
          const index = state.getAllIncorporationTypes.data.data.findIndex(
            (incType) => incType._id.toString() === payload?._id.toString()
          );
          if (index !== -1) {
            state.getAllIncorporationTypes.data.data[index] = payload;
          }
          break;
        }
        case "delete": {
          state.getAllIncorporationTypes.data.data = state.getAllIncorporationTypes.data.data.filter(
            (incType) => incType._id.toString() !== payload._id.toString()
          );
          break;
        }
        default:
          console.warn(`Unhandled type: ${type}`);
      }
    },
  },
});

export const incorporationTypeActions = incorporationTypeSlice.actions;
export const incorporationTypeReducer = incorporationTypeSlice.reducer;
