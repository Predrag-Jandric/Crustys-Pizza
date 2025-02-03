import { createSlice } from "@reduxjs/toolkit";
import defaultImg from "../../assets/unknownPerson.jpg";

const initialState = {
  username: "",
  image: `${defaultImg}`,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser(state, action) {
      state.username =
        action.payload.charAt(0).toUpperCase() + action.payload.slice(1);
    },
    updateUser(state, action) {
      state.username = action.payload;
    },
    updateUserImage(state, action) {
      state.image = action.payload;
    },
    removeUser(state){
      state.username = "";
      state.image = `${defaultImg}`;
    }
  },
});

export const getUsername = (state) => state.user.username;
export const getUserImage = (state) => state.user.image;

export const { createUser, updateUser, updateUserImage, removeUser } = userSlice.actions;
export default userSlice.reducer;
