import UserModel from "../../page/UserModel";

import {createSlice} from '@reduxjs/toolkit'
const initState={
    value: new UserModel(),
}



const userSlice =createSlice(

    {
        ///// name first
        name: 'user',
        initialState: initState,
        s:{
                setUserValue:(state,action)=>{

                    state.value=action.payload;

                    
            
                }
        }
    }


)


// Action creators are generated for each case reducer function



export const { setUserValue} = userSlice.actions  /// for use in dispatch

export default userSlice.reducer   /// for use in store