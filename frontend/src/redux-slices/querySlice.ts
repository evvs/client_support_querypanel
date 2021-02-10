import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QueryState {
  queryInput: string;
}

const initialState = { queryInput: '' } as QueryState;

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    updateQuery(state, action: PayloadAction<string>) {
      state.queryInput = action.payload;
    },
  },
});

export const { updateQuery } = querySlice.actions;

export default querySlice.reducer;
