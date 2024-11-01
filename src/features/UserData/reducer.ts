import { createAction, createReducer } from "@reduxjs/toolkit";
import { I_UserData } from "./types";
import { T_AppThunk } from "store/types";

const initialState: I_UserData = {
  id: null,
  login:null,
  displayName: null,
  email:null,
  phone:null,
  nameFirst:null,
  nameLast:null,
  namePatronymic:null,
  birthDate:null,
  gender:null
}

const setUserDataAction = createAction<I_UserData>("USER_DATA/set")

const userDataReducer = createReducer(initialState,(builder)=>{
  builder.addCase(
    setUserDataAction,
    (_,action) =>action.payload
  )
})

export const setUserData = (userData:I_UserData):T_AppThunk => (dispatch)=>{
  dispatch(setUserDataAction(userData))
}

export default userDataReducer