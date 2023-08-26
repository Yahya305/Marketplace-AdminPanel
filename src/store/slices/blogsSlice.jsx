import { createSlice } from "@reduxjs/toolkit";

const blogsSlice= createSlice({
    name: "blogsSlice",
    initialState: {
        articles:[
            {
                title:"abc",
                desc: "xyzzz",
                imgs:[""],
                content:""
            },
            {
                title:"abc",
                desc: "xyzzz",
                imgs:[""],
                content:""
            },
        ],
        changelog:[
            {
                date:"",
                content:""
            },{
                date:"",
                content:""
            },{
                date:"",
                content:""
            },
        ]
    },
    reducers:{
        addArticle(state,action){
            state.push({...state,articles:state.articles.push(action.payload)})
            return 
        },addBlog(state,action){
            state.push({...state,changelog:state.changelog.push(action.payload)})
            return 
        },
        deleteBlog(state,action){
            return state.filter(
                (policy,id) => id !== action.payload.id
              );
        },deleteArticle(state,action){
            return state.filter(
                (policy,id) => id !== action.payload.id
              );
        },
        editArticle(state,action){
            let xyz=state.map((policy,id)=>
                id === action.payload.id ? { ...policy, role: action.payload.role } : policy
            )
            console.log(xyz,"XYZ")
            return xyz
        },
    }
})

export default blogsSlice.reducer;
export const { addBlog,deleteBlog,editBlog,addArticle,deleteArticle } = blogsSlice.actions;