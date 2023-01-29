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
export const constGetUserDetail = createAsyncThunk("constGetUserDetail",
async(userId) =>{
    try{
    const response = await UserService.findUserDetail(userId)
    console.log('response::',response)
    console.log('detail requested id == ',userId ,'response = ',response)
    return response
    }catch(e){
        console.error("에러발생생", e.response.data);
        return e.response.data
    }
})
const isRejectAction=action=>
    (action.type.endsWith('rejected'))
// const isRejectedAction = action =>(action.type.endWith('rejected'))
const userSlice = createSlice({
    name: 'user',
    initialState:{
        loading: 'idle',
        id: 0,
        name: "",
        userId: "",
        departmentId: "",
        workLocate: "",
        workStatus: "",
        groupWareId: "",
        cellPhone: "",
        residentRegistrationNumber: "",
        dateOfBirth: "",
        externalEmail: "",
        position: "",
        grade: "",
        current:[],
        entity: {},
        error: null,
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
        },
        addExtraActions:(state,{payload}) =>{
            state.current = payload
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(constGetUserDetail.fulfilled, (state,{payload}) =>{
            state.entity = payload
        })
        // .addCase(constGetUserDetail.rejected, (state, action) =>{
        //     state.error = action.error
        // })
        .addMatcher(isRejectAction, ()=>{})
        .addDefaultCase((state,payload) => {})
    }
})
const {actions,reducer} = userSlice
export const currrentUser = state => state.user.entity
export const {toeknRequest, registUser, registDetailUser, addExtraActions} = actions

export default reducer