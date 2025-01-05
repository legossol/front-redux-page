import React, {useEffect}  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { constGetUserDetail, currrentUser} from './../reducer/user.reducer'

const UserInfo = () =>{
    const dispatch = useDispatch();
    const param = useSelector(currrentUser);

    const { id } = useParams();
    useEffect(()=>{
        dispatch(constGetUserDetail(id))
    }, []);

    const useInfo = useSelector((state) =>{
        return state.user
    })

    // const usserInfo = useSelector((state) => state.user.userrState);
    console.log("yes userinfo===",useInfo)
    console.log("yes userinfo===",param)

    return (
        <>
        <div>
            <p>uri inserted id :: {id}</p>
            <p>유저 정보 :: {param.id}</p>
            <p>currnetUserInfo :: {param.name}</p>
        </div>
        <table>
            <td>
                <tr></tr>
            </td>
        </table>
        </>
    )
}

export default UserInfo;