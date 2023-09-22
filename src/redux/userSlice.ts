import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userName?: string | null;
  userEmail?: string | null;
  userID?: string | null;
  userImage?: string ;
}

const initialState: UserState = {
  userName: null,
  userEmail: null,
  userID: null,
  // userImage: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (
      state,
      action: PayloadAction<{
        userName?: string;
        userEmail?: string;
        userID?: string;
        userImage?: string;
      }>
    ) => {
      state.userName = action.payload.userName ?? state.userName;
      state.userEmail = action.payload.userEmail ?? state.userEmail;
      state.userID = action.payload.userID ?? state.userID;
      state.userImage = action.payload.userImage ?? state.userImage;
    },
    setUserLogOutState: (state) => {
      state.userName = null;
      state.userEmail = null;
      state.userID = null;
      // state.userImage = null;
    },
  },
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;

export const selectUserName = (state: { user: UserState }) =>
  state.user?.userName;
export const selectUserEmail = (state: { user: UserState }) =>
  state.user?.userEmail;
export const selectUserID = (state: { user: UserState }) => state.user?.userID;
export const selectUserImage = (state: { user: UserState }) =>
  state.user?.userImage;

export default userSlice.reducer;
