import { useDispatch, useSelector } from "react-redux";
import userSlice from "../slice/UserSlice";
import { useEffect } from "react";
import axios from "axios";

const userSliceActions = userSlice.actions;
const User =() =>{
    const localUserSliceState = useSelector((globalState)=>{
        return globalState.userSliceState;
    })
    const dispatch = useDispatch();
    console.log(localUserSliceState);
    useEffect(()=>{
        //axiosGetUser();
        dispatch(userSliceActions.getUserDetails());

    },[])
    return (
        <div>
            I am an User
            <p>status : {localUserSliceState.status}</p>
        </div>
    );
}

export default User;

async function axiosGetUser(){
    try {
        const response = await axios.get('https://dummyjson.com/users/1')
        // const resData = await response.json()
        console.log(response.data["email"])
        
    } catch (error) {
        console.log(error.message)
        
    }
}