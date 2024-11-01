import { configureStore } from "@reduxjs/toolkit";

import reducers from "./reducers"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { T_RootState } from "./types";

const store = configureStore({reducer:reducers})

export default store

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<T_RootState> = useSelector