import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type ServersState = {
  serversList: [];
};

const initialState = { serversList: [] } as ServersState;

const fetchServersList = createAsyncThunk(
  'servers/fetchServersList',
  async () => {
    const response = await axios.get('/api');
    return response.data;
  },
);

const serversSlice = createSlice({
  name: 'servers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchServersList.fulfilled, (state, action) => {
      state.serversList = action.payload;
    });
  },
});

export default serversSlice.reducer;
