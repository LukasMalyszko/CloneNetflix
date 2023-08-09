import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userName: string | null;
  userEmail: string | null;
}

const initialState: UserState = {
  userName: null,
  userEmail: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (
      state,
      action: PayloadAction<{ userName: string; userEmail: string }>
    ) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
    setUserLogOutState: (state) => {
      state.userName = null;
      state.userEmail = null;
    },
  },
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;

export const selectUserName = (state: { user: UserState }) =>
  state.user?.userName;
export const selectUserEmail = (state: { user: UserState }) =>
  state.user?.userEmail;

export default userSlice.reducer;
