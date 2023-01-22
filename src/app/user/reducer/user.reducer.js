import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserService from "../service/UserService";

export const getUser = createAsyncThunk("createAsyncThunk(",
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
            state.
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
export const {toeknRequest} = actions

export default reducer