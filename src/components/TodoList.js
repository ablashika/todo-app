import React from 'react'
import TodoItem from './TodoItem';

export default  function TodoList(props) {
 
   const handleClick = (user) => {
    console.log(`Clicked on user:`, user);
  };

//   const handleClick = () => {
//     // 👇️ toggle
//     setIsActive(current => !current);
//     //decorativeLine
//     setDecorative(true)
//   };

  return (
     
            <div className='todo-card'>
          <div className='todo-item'>
                {/*listing each element my array item */}
                {
                  props.newUser.map((user) =>(<TodoItem  user={user} handleClick={handleClick}/>))
                }
               <div className='last-item'>
                <h1>hdh</h1>
              </div>

              </div>

              

              
              </div>
              
       
        
  
  )
}
