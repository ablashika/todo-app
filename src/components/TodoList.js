
import React, { useState } from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  const [displayMode, setDisplayMode] = useState('all');

  const handleClick = (user) => {
    console.log(user, "user has been clicked");
  };

  let itemsToDisplay;
  switch (displayMode) {
    case 'completed':
      itemsToDisplay = props.newUser.filter(item => item.isCompleted === true);
      break;
    case 'active':
      itemsToDisplay = props.newUser.filter(item => item.isCompleted=== false);
      break;
    default:
      itemsToDisplay = props.newUser;
  }

  return (
    <div>
       {itemsToDisplay.map((user) => (
        <TodoItem
          key={user.id}
          user={user}
          handleClick={handleClick}
          count={props.count}
          newClick={props.setCount}
          newUser={props.newUser}
          // handleSubmit={props.handleSubmit}
          displayMode={displayMode}
          setDisplayMode={setDisplayMode}
          
        />
      ))}
         <div className='last-item'>
                <p>{props.count + props.newUser.length} items left</p>
                <div className='last-item-text'>
                  <div onClick={() =>setDisplayMode('all') }><p >All</p></div>
                  <div onClick={()=>setDisplayMode('active')}><p>Active</p></div>
                  <div onClick={()=>setDisplayMode('completed')}><p>completed</p></div>
                </div>
                <p>Clear Completed</p>
              </div>
       <div>
       </div>
    
    </div>
  );
}





