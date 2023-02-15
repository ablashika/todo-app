import React,{useEffect, useState}from 'react'

export default function TodoItem({user,newClick,count,handleSubmit,handleClick}) {
    const [isDecorative, setDecorative] = useState(user.isActive)
    const counter = () => {
    newClick(count + (isDecorative ? 1 : -1));
};



const updateActive=()=>{
  if (user.isActive==true) {
    user.isActive = false
  }else{
    user.isActive = true
  }
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
                  handleSubmit()
              
              }}
             >
             <svg className='icons' xmlns="http://www.w3.org/2000/svg" width="10" height="10"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
              </div>
              <div>
              <p style={{
                  textDecoration: isDecorative?'line-through': ""
                }}>{user.note}</p>
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
