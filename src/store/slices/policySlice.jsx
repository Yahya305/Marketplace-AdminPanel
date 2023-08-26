import { createSlice } from "@reduxjs/toolkit";

const policySlice= createSlice({
    name: "policySlice",
    initialState: [
        {
          role: "Manager",
          dashboard: true,
          iam: true,
          buyers: true,
          sellers: true,
          listings: true,
          meetings: true,
          deals: true,
          blogs: true,
        },
        {
          role: "Contributer",
          dashboard: true,
          iam: true,
          buyers: true,
          sellers: true,
          listings: true,
          meetings: true,
          deals: true,
          blogs: true,
        },
        {
          role: "Moderator",
          dashboard: false,
          iam: true,
          buyers: true,
          sellers: true,
          listings: true,
          meetings: false,
          deals: true,
          blogs: true,
        },
        {
          role: "Advertizer",
          dashboard: true,
          iam: false,
          buyers: false,
          sellers: false,
          listings: true,
          meetings: false,
          deals: true,
          blogs: true,
        },
        {
          role: "Bot",
          dashboard: null,
          iam: null,
          buyers: null,
          sellers: null,
          listings: null,
          meetings: true,
          deals: true,
          blogs: null,
        },
      ],
    reducers:{
        addPolicy(state,action){
            state.push({
                role: "new policy",
                dashboard: null,
                iam: null,
                buyers: null,
                sellers: null,
                listings: null,
                meetings: true,
                deals: true,
                blogs: null,
              })
            return 
        },
        removePolicy(state,action){
            return state.filter(
                (policy,id) => id !== action.payload.id
              );
        },
        renamePolicy(state,action){
            let xyz=state.map((policy,id)=>
                id === action.payload.id ? { ...policy, role: action.payload.role } : policy
            )
            console.log(xyz,"XYZ")
            return xyz
        },updatePolicy(state,action){
            let xyz=state.map((policy,id)=>
                id === action.payload.id ? { ...policy, role: action.payload.role } : policy
            )
            console.log(xyz,"XYZ")
            return xyz
        },
    }
})

export default policySlice.reducer;
export const { addPolicy,removePolicy,renamePolicy,updatePolicy } = policySlice.actions;
