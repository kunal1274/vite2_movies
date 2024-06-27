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
    // const {firstName,lastName,role,university} = localUserSliceState.user;
    console.log(localUserSliceState);
    useEffect(()=>{
        //axiosGetUser();
        console.log("inside useEffect , dispatching the action for getting user details")
        dispatch(userSliceActions.getUserDetails(1));

    },[])
    return (
        <div>
            I am an User
            <p>status : {localUserSliceState.status}</p>
            <div className="mt-3 border border-2 p-4">
            {
                localUserSliceState.status === "Success"
                ?
                (<div>
                    <p>User Details : {localUserSliceState.user.email}</p>
                    <p>Full Name : {localUserSliceState.user.firstName} {localUserSliceState.user.lastName}</p>
                    <p>Role : {localUserSliceState.user.role}</p>
                    <p>University : {localUserSliceState.user.university}</p> 
                </div>)
                : 
                (<p>Loading user details ...</p>)
            }
            
            {/* <p>Full Name : {firstName} {lastName}</p>
            <p>Role : {role}</p>
            <p>University : {university}</p> */}

            </div>
            
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