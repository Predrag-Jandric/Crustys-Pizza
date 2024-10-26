import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  username: "",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action){
      state.username = action.payload.charAt(0).toUpperCase() + action.payload.slice(1)
    }
  }
})

export const getUsername = (state) => state.user.username

export const {updateName} = userSlice.actions
export default userSlice.reducer