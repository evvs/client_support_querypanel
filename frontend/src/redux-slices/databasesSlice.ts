import { createSlice } from '@reduxjs/toolkit';

type DatabasesState = {
  databasesList: [];
}

const initialState = { databasesList: [] } as DatabasesState;

const databasesSlice = createSlice({
  name: 'databases',
  initialState,
  reducers: {
  },
});

export default databasesSlice.reducer;
