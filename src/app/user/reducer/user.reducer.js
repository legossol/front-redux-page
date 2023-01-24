import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import UserService from "../service/UserService";

export const getUser = createAsyncThunk("getUser",
async (page) => {
    const response = await UserService.getUsers(page)
    return response.data
})
export const requestToekn = createAsyncThunk("requestToekn",
async (args) =>{
    console.log('request data args ===', args)
    const response = await UserService.requestDefaultToken(args)
    return response.data
})
export const constRegisteUser = createAsyncThunk("constRegisteUser",
async (args) =>{
    console.log('register userinfo to database', args)
    const response = await UserService.registUserInfo(args)
    console.log('response::',JSON.stringify(response))
    return response.data
})
export const constDetailRegisteUser = createAsyncThunk("constDetailRegisteUser",
async (args) =>{
    console.log('detail requested',args)
    const response = await UserService.registDetailUserInfo(args)
    return response.data
})
// const isRejectedAction = action =>(action.type.endWith('rejected'))
const userSlice = createSlice({
    name: 'userInfo',
    initialState:{
        
        // pageResult: {
        //     pageResult:{
        //         dtoList: [],
        //         page:1,
        //         pageList:[],
        //         start: 1,
        //         end: 1,
        //         prev: false,
        //         next: false
        //     },
            // userState: {
            //     userId: '',
            //     name: ''
        //     },
        //     type: '',
        //     keyword: '',
        //     params: {},
        //     pageFileDto: []
        // }
    },
    reducers:{
        changeUserInfo: (state, {payload}) =>{
            state.type = payload.type
            state.keyword =payload.keyword
        },
        toeknRequest: (state,{payload}) =>{
            state.id = payload.id
            state.password = payload.password
        },
        registUser:  (state, {payload}) =>{
            state.name = payload.name
        },
        registDetailUser: (state, {payload}) =>{
            state.name = payload.name
        }

    }
    // extraReducers: (builder) =>{
    //     builder
    //     .addCase(getUser.fulfilled, (state,{payload}) =>{
    //         state.pageResult = payload
    //     })
    //     .addMatcher(isRejectedAction).addDefaultCase()
    //     .addDefaultCase((state,payload) => {})
    // }
})
const {actions,reducer} = userSlice
export const {toeknRequest, registUser, registDetailUser} = actions

export default reducer