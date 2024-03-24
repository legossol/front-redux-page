import axios from 'axios'
const headers = {
    'Content-type': 'application/json; charset=UTF-8', //application/x-www-form-urlencoded; charset=UTF-8
    'Accept': '*/*',
    'Access-Control-Allow-Origin':'*'
}
const getUsers = (page) =>{
    return axios.get(`http://localhost:9001/management/users/list?page=${page}`)
}
const requestDefaultToken = (payload) =>{
    return axios.post(`http://localhost:9088/realms/myService/protocol/openid-connect/token`, JSON.stringify(payload), {headers}).then(res =>{console.log('sended Ok',res.data)})
}
const registUserInfo = (payload) =>{
    return axios.post(`http://localhost:9001/management/account/regist`, JSON.stringify(payload), {headers}).then(res =>{console.log('sended Ok',res.data)})
}
const registDetailUserInfo = (payload) =>{
    return axios.post(`http://localhost:9001/management/user/detail`, JSON.stringify(payload), {headers}).then(res =>{console.log('sended Ok',res.data)})
}
// const findUserDetail = (userId,payload) =>{
//     return axios.get(`http://localhost:9001/management/user/${userId}`,JSON.stringify(payload), {headers}).then(res =>{console.log('sended Ok',res.data)})
// }
const findUserDetail = (userId,data) =>{
    return axios({
        url: `http://localhost:9001/management/user/${userId}`,
        method: `get`,
        data: data,
        headers:{
            // Authorization: 'JWT fefege...'
            'Content-type': 'application/json; charset=UTF-8', //application/x-www-form-urlencoded; charset=UTF-8
            'Accept': '*/*',
            'Access-Control-Allow-Origin':'*'
        }
    }).then(res =>{
        console.log('sended Ok',res.data)
        return res.data
    })
}
export default {getUsers, requestDefaultToken, registUserInfo, registDetailUserInfo, findUserDetail};