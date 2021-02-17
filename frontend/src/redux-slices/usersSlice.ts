import { createSlice } from '@reduxjs/toolkit';

type User = {
  id: string;
  name: string;
  role: string;
}

interface UsersState {
  usersbyid: string[];
  users: {
    [key: string]: User;
  };
}

const initialState = { usersbyid: [], users: {} } as UsersState;

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
});

export default usersSlice.reducer;
