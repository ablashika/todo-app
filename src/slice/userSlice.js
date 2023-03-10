// import { createSlice } from '@reduxjs/toolkit'
// //creating initial state
// const initialState = {
//   users:[
//     {note:"solve ds questions",id:1,isActive:false },
//     {note:"have launch @12",id:2,isActive:false},
//     {note:"have a meeting at 1am", id:3,isActive:false}
// ]
// }
// const userSlice = createSlice({
//     name:"users",
//     initialState,
//     //create reducers that checks for that actions are triggered
//     reducers:{
//         addUser: (state,action)=>{
//             state.users = [...state.users, action.payload]
//         },

//         toggleActive:(state,action)=>{
//             const userId = action.payload;
//             const user = state.users.find(user => user.id === userId)
//             if (user.isActive === true) {
//                 user.isActive = false;
//               } else {
//                 user.isActive = true;
//               }
//             // if (user) {
//             //     user.isActive = !user.isActive;
//             //   }
//         },
//         deleteUser:()=>{

//         }
//     }
// })


// export const {addUser,toggleActive} = userSlice.actions
// export default userSlice.reducer
