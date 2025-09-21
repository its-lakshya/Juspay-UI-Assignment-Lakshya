import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leftSidebarVisible: JSON.parse(localStorage.getItem("leftSidebar")) ?? true,
  rightSidebarVisible: JSON.parse(localStorage.getItem("rightSidebar")) ?? false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleLeftSidebar(state) {
      console.log(state)
      state.leftSidebarVisible = !state.leftSidebarVisible;
      localStorage.setItem("leftSidebar", JSON.stringify(state.leftSidebarVisible));
    },
    toggleRightSidebar(state) {
      state.rightSidebarVisible = !state.rightSidebarVisible;
      localStorage.setItem("rightSidebar", JSON.stringify(state.rightSidebarVisible));
    },
    setLeftSidebar(state, action) {
      state.leftSidebarVisible = action.payload;
      localStorage.setItem("leftSidebar", JSON.stringify(action.payload));
    },
    setRightSidebar(state, action) {
      state.rightSidebarVisible = action.payload;
      localStorage.setItem("rightSidebar", JSON.stringify(action.payload));
    },
  },
});

export const {
  toggleLeftSidebar,
  toggleRightSidebar,
  setLeftSidebar,
  setRightSidebar,
} = layoutSlice.actions;

export default layoutSlice.reducer;
