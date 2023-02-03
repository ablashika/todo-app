import React, {useState} from 'react'
import TodoList from './TodoList';



export default function Todo(props) {
  const [todo, setTodo] = useState("");
  
  console.log(props);

  const handleNameChange = (e)=> {
    setTodo(e.target.value)

   
  }

  const handleSubmit = (e) => {
      e.preventDefault() 
      let newUser = {note:todo, id:Math.floor(Math.random() * 1000) + 1}
      props.addUser(newUser)
      console.log(e.target.value)  
  }


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // e.target.form.dispatchEvent(new Event("submit"), { cancelable: true })
      handleSubmit(e);

    }
  };

  


  return (
    <div className=''>
        <div className='img-bg'>

        <div className='todo-input'>
                <div className='title-bx'>
                  <p className='title-todo'>Todo</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>
                </div>
                <form onSubmit={handleSubmit}>
                
                  <input  onChange={handleNameChange} value={todo} onKeyDown={handleKeyDown}></input>
      
                </form>


              </div>


          
        </div>
        <TodoList newUser={props.users}/>

           
      
    </div>
  )
}
