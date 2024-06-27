import userSlice from "../slice/UserSlice";
import axios from "axios";

const localUserMiddlewareActions = userSlice.actions;

const userMiddleware = (store)=>(next)=>async (action)=>{
    console.log("inside userMiddleware")
    console.log(action.type);
    if (action.type === localUserMiddlewareActions.getUserDetails.type){
        console.log("inside action type getUserDetails.ready for dispatching");
        next(action)
        console.log("Idle to Loading Changed")
        try {
            const response = await axiosFetchUser(action.payload)
            console.log(response.data);
            store.dispatch(localUserMiddlewareActions.getUserSuccess(response.data))
        } catch (error) {
            console.log(error.message)
            store.dispatch(localUserMiddlewareActions.getUserFailure(error.message))
            
        }
    }
    else{
        return next(action)
    }
    // next(action)

}

export default userMiddleware;

async function axiosFetchUser(userId){
    try {
        const response = await axios.get(`https://dummyjson.com/users/${userId}`)
        // const resData = await response.json()
        //console.log(response.data["email"])
        return response;
        
    } catch (error) {
        //console.log(error.message)
        throw error;
        
    }
}