import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSingleAccount } from "../../components/ui/dashboardComponents/services/apiServices";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (accountId, { rejectWithValue }) => {
    try {
      const res = await getSingleAccount(accountId);
      
      // normalize different possible response shapes
      const userObj = res?.data?.data ?? res?.data ?? res;
      
      const userId = userObj?.userId ?? {};
      const address =
        userObj?.city && userObj?.state ? `${userObj.city}, ${userObj.state}` : "";

      return {
        firstName: userObj?.firstName ?? "",
        lastName: userObj?.lastName ?? "",
        email: userId?.email ?? "",
        phoneNumber: userId?.phoneNumber ?? "",
        address,
        profileImage: userObj?.profilePicture ,
        userId: userObj?.userId?._id ?? userObj?.userId,
      };
    } catch (error) {
      return rejectWithValue(error.message || "Failed to load profile");
    }
  }
);

const initialState = {
  data: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    profileImage: "/assets/img/account/user.jpg",
    userId: null,
  },
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    clearUser: (state) => {
      state.data = initialState.data;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;