import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type QueryError = {
  query: '',
  error: '',
}

type QueryState = {
  queryInput: string;
  queryErrors: QueryError[];
}

const initialState = { queryInput: '', queryErrors: [] } as QueryState;

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
