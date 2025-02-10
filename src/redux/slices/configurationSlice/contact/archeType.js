import { createSlice } from "@reduxjs/toolkit";

const initialArcheTypeState = {
  getArcheType: {
    status: "idle",
    error: null,
    data: null,
  },
  getAllArcheTypes: {
    status: "idle",
    error: null,
    data: null,
  },
  createArcheType: {
    status: "idle",
    error: null,
    data: null,
  },
  updateArcheType: {
    status: "idle",
    error: null,
    data: null,
  },
  deleteArcheType: {
    status: "idle",
    error: null,
    data: null,
  },
};

const archeTypeSlice = createSlice({
  name: "archeType",
  initialState: initialArcheTypeState,
  reducers: {
    getArcheTypeRequest: (state) => {
      state.getArcheType.status = "pending";
    },
    getArcheTypeSuccess: (state, action) => {
      state.getArcheType.status = "success";
      state.getArcheType.data = action.payload;
    },
    getArcheTypeFailure: (state, action) => {
      state.getArcheType.status = "failed";
      state.getArcheType.error = action.payload;
    },
    getAllArcheTypesRequest: (state) => {
      state.getAllArcheTypes.status = "pending";
    },
    getAllArcheTypesSuccess: (state, action) => {
      state.getAllArcheTypes.status = "success";
      state.getAllArcheTypes.data = action.payload;
    },
    getAllArcheTypesFailure: (state, action) => {
      state.getAllArcheTypes.status = "failed";
      state.getAllArcheTypes.error = action.payload;
    },
    createArcheTypeRequest: (state) => {
      state.createArcheType.status = "pending";
    },
    createArcheTypeSuccess: (state, action) => {
      state.createArcheType.status = "success";
      state.createArcheType.data = action.payload;
    },
    createArcheTypeFailure: (state, action) => {
      state.createArcheType.status = "failed";
      state.createArcheType.error = action.payload;
    },
    updateArcheTypeRequest: (state) => {
      state.updateArcheType.status = "pending";
    },
    updateArcheTypeSuccess: (state, action) => {
      state.updateArcheType.status = "success";
      state.updateArcheType.data = action.payload;
    },
    updateArcheTypeFailure: (state, action) => {
      state.updateArcheType.status = "failed";
      state.updateArcheType.error = action.payload;
    },
    deleteArcheTypeRequest: (state) => {
      state.deleteArcheType.status = "pending";
    },
    deleteArcheTypeSuccess: (state, action) => {
      state.deleteArcheType.status = "success";
      state.deleteArcheType.data = action.payload;
    },
    deleteArcheTypeFailure: (state, action) => {
      state.deleteArcheType.status = "failed";
      state.deleteArcheType.error = action.payload;
    },
    clearGetArcheTypeStatus: (state) => {
      state.getArcheType.status = "idle";
    },
    clearGetArcheTypeData: (state) => {
      state.getArcheType.data = null;
    },
    clearGetArcheTypeError: (state) => {
      state.getArcheType.error = null;
    },
    clearGetAllArcheTypesStatus: (state) => {
      state.getAllArcheTypes.status = "idle";
    },
    clearGetAllArcheTypesData: (state) => {
      state.getAllArcheTypes.data = null;
    },
    clearGetAllArcheTypesError: (state) => {
      state.getAllArcheTypes.error = null;
    },
    clearCreateArcheTypeStatus: (state) => {
      state.createArcheType.status = "idle";
    },
    clearCreateArcheTypeData: (state) => {
      state.createArcheType.data = null;
    },
    clearCreateArcheTypeError: (state) => {
      state.createArcheType.error = null;
    },
    clearUpdateArcheTypeStatus: (state) => {
      state.updateArcheType.status = "idle";
    },
    clearUpdateArcheTypeData: (state) => {
      state.updateArcheType.data = null;
    },
    clearUpdateArcheTypeError: (state) => {
      state.updateArcheType.error = null;
    },
    clearDeleteArcheTypeStatus: (state) => {
      state.deleteArcheType.status = "idle";
    },
    clearDeleteArcheTypeData: (state) => {
      state.deleteArcheType.data = null;
    },
    clearDeleteArcheTypeError: (state) => {
      state.deleteArcheType.error = null;
    },
    updateArcheTypeList: (state, action) => {
      const { type, payload } = action.payload;

      if (!Array.isArray(state.getAllArcheTypes?.data?.data)) {
        state.getAllArcheTypes.data = {
          ...state.getAllArcheTypes.data,
          data: [],
        };
      }

      switch (type) {
        case "add": {
          state.getAllArcheTypes.data.data = [
            payload,
            ...state.getAllArcheTypes.data.data,
          ];
          break;
        }
        case "update": {
          const index = state.getAllArcheTypes.data.data.findIndex(
            (archeType) => archeType._id.toString() === payload?._id.toString()
          );
          if (index !== -1) {
            state.getAllArcheTypes.data.data[index] = payload;
          }
          break;
        }
        case "delete": {
          state.getAllArcheTypes.data.data = state.getAllArcheTypes.data.data.filter(
            (archeType) => archeType._id.toString() !== payload._id.toString()
          );
          break;
        }
        default:
          console.warn(`Unhandled type: ${type}`);
      }
    },
  },
});

export const archeTypeActions = archeTypeSlice.actions;
export const archeTypeReducer = archeTypeSlice.reducer;
