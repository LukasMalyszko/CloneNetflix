import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userName: string | null;
  userEmail?: string | null;
  userID?: string | null;
}

const initialState: UserState = {
  userName: null,
  userEmail: null,
  userID: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (
      state,
      action: PayloadAction<{ userName: string;  userEmail: string; userID: string }>
    ) => {
      state.userName = action.payload.userName;
      // const { userEmail, userID } = state;
      // state.userEmail = userEmail;
      // state.userID = userID;
      state.userEmail = action.payload.userEmail;
      state.userID = action.payload.userID;
    },
    setUserLogOutState: (state) => {
      state.userName = null;
      state.userEmail = null;
      state.userID = null;
    },
  },
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;

export const selectUserName = (state: { user: UserState }) =>
  state.user?.userName;
export const selectUserEmail = (state: { user: UserState }) =>
  state.user?.userEmail;
export const selectUserID = (state: { user: UserState }) => state.user?.userID;

export default userSlice.reducer;
