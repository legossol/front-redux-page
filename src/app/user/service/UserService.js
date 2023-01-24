import axios from 'axios'
const headers = {
    'Content-type': 'application/json; charset=UTF-8', //application/x-www-form-urlencoded; charset=UTF-8
    'Accept': '*/*',
    'Access-Control-Allow-Origin':'*'
}
const getUsers = (page) =>{
    return axios.get(`http://localhost:8080/users/list?page=${page}`)
}
const requestDefaultToken = (payload) =>{
    return axios.post(`http://localhost:9088/realms/myService/protocol/openid-connect/token`, JSON.stringify(payload), {headers}).then(res =>{console.log('sended Ok',res.data)})
}
const registUserInfo = (payload) =>{
    return axios.post(`http://localhost:9001/management/user`, JSON.stringify(payload), {headers}).then(res =>{console.log('sended Ok',res.data)})
}
const registDetailUserInfo = (payload) =>{
    return axios.post(`http://localhost:9001/management/user/detail`, JSON.stringify(payload), {headers}).then(res =>{console.log('sended Ok',res.data)})
}
export default {getUsers, requestDefaultToken, registUserInfo, registDetailUserInfo};