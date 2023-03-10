import React,{useState}from 'react'
import { fetchTasks, setTasks, toggleActive } from '../slice/todoSlice';
import {useDispatch} from 'react-redux';
import { deleteTask } from '../slice/todoSlice';

export default function TodoItem({user,newClick,count,handleClick}) {
  const dispatch = useDispatch();
    const [isDecorative, setDecorative] = useState(user.isCompleted)
    const counter = () => {
    newClick(count + (isDecorative ? 1 : -1));
};



const updateActive=()=>{
    dispatch(toggleActive(user.id));
    setDecorative(!isDecorative);
}

const deleteButton = (taskId) => {
  dispatch(deleteTask(taskId))
}
  return (
 <div>
        <div className='item'>
             <div className='icon-circle'
             style={{
              backgroundImage: !isDecorative? '':`linear-gradient(243deg, rgb(6, 126, 237) 0%, rgb(157, 24, 177) 76%, rgb(0, 208, 250) 100%)`,
              }}
              onClick={()=>{
                  updateActive()
                  setDecorative(!isDecorative);
                  handleClick(user);
                  counter() 
                  // handleSubmit()
              
              }}
             >
             <svg className='icons' xmlns="http://www.w3.org/2000/svg" width="10" height="10"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
              </div>
              <div className='item-container' >
              <p style={{
                  textDecoration: isDecorative?'line-through': ""
                }}>{user.content}</p>
                <div onClick={() => deleteButton(user.id)} className="cross-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                </div>
              </div>
               
              </div>
              
        
            
              </div>
  )
}


// import React, { useEffect, useState } from 'react';

// export default function TodoItem(props) {
//   const { user, handleClick, count, newClick, handleSubmit, displayMode } = props;
//   const [isDecorative, setDecorative] = useState(user.isActive);

//   useEffect(() => {
//     // When the display mode changes, update the isDecorative state
//     switch (displayMode) {
//       case 'all':
//         setDecorative(user.isActive);
//         break;
//       case 'active':
//         setDecorative(false);
//         break;
//       case 'completed':
//         setDecorative(true);
//         break;
//       default:
//         setDecorative(user.isActive);
//     }
//   }, [displayMode, user.isActive]);

//   const counter = () => {
//     newClick(count + (isDecorative ? 1 : -1));
//   };

//   const updateActive = () => {
//     user.isActive = !user.isActive;
//   };

//   return (
//     <div>
//       <div className="item">
//         <div
//           className="icon-circle"
//           style={{
//             backgroundImage: !isDecorative
//               ? ''
//               : `linear-gradient(243deg, rgb(6, 126, 237) 0%, rgb(157, 24, 177) 76%, rgb(0, 208, 250) 100%)`,
//           }}
//           onClick={() => {
//             updateActive();
//             setDecorative(!isDecorative);
//             handleClick(user);
//             counter();
//             handleSubmit();
//           }}
//         >
//           <svg className="icons" xmlns="http://www.w3.org/2000/svg" width="10" height="10">
//             <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" />
//           </svg>
//         </div>
//         <div>
//           <p style={{ textDecoration: isDecorative ? 'line-through' : '' }}>{user.note}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
