import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_suma_list = createAsyncThunk(
  "sumas/api_v1_suma_list",
  async payload => {
    const response = await apiService.api_v1_suma_list(payload)
    return response.data
  }
)
export const api_v1_suma_create = createAsyncThunk(
  "sumas/api_v1_suma_create",
  async payload => {
    const response = await apiService.api_v1_suma_create(payload)
    return response.data
  }
)
export const api_v1_suma_retrieve = createAsyncThunk(
  "sumas/api_v1_suma_retrieve",
  async payload => {
    const response = await apiService.api_v1_suma_retrieve(payload)
    return response.data
  }
)
export const api_v1_suma_update = createAsyncThunk(
  "sumas/api_v1_suma_update",
  async payload => {
    const response = await apiService.api_v1_suma_update(payload)
    return response.data
  }
)
export const api_v1_suma_partial_update = createAsyncThunk(
  "sumas/api_v1_suma_partial_update",
  async payload => {
    const response = await apiService.api_v1_suma_partial_update(payload)
    return response.data
  }
)
export const api_v1_suma_destroy = createAsyncThunk(
  "sumas/api_v1_suma_destroy",
  async payload => {
    const response = await apiService.api_v1_suma_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const sumasSlice = createSlice({
  name: "sumas",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_suma_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_suma_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_suma_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_suma_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_suma_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_suma_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_suma_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_suma_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_suma_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_suma_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_suma_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_suma_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_suma_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_suma_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_suma_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_suma_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_suma_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_suma_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_suma_list,
  api_v1_suma_create,
  api_v1_suma_retrieve,
  api_v1_suma_update,
  api_v1_suma_partial_update,
  api_v1_suma_destroy,
  slice: sumasSlice
}
