import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  users: [],
  error: '',
};

// const TOKEN = import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN;
// console.log(TOKEN, "TOKEN");
export const fetchUsers = createAsyncThunk('user/fetchUsers', (url) => {
  return axios("https://jsonplaceholder.typicode.com/users")
    .then(({ data }) => data)
    .catch((error) => error);
});

const userSlice = createSlice({
  name: 'user',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled,
      (state, action) => {
      // console.log("action fulfilled: ", action);

        state.isLoading = false;
        state.users = action.payload;
      });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      console.log("action rejected: ", action);
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;