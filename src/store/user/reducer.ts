import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type postType = {
  userId: Number;
  id: Number;
  title: String;
  body: String;
};
export type initial = {
  isloading: boolean;
  isLoggedIn: boolean;
  data: postType[];
};
const initialState: initial = {
  isloading: false,
  isLoggedIn: false,
  data: [],
};

export const Reducers = createSlice({
  name: 'reducers',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    logout: state => {
      state.isLoggedIn = false;
    },
    posts: (state, action: PayloadAction<postType[]>) => {
      state.data = action.payload;
    },
    default: state => {
      state = initialState;
    },
  },
});

export const {login, logout} = Reducers.actions;

export default Reducers.reducer;
export type RootState = ReturnType<typeof Reducers.reducer>;
