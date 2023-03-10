import React,{useState,useEffect} from 'react';
import Todo from './components/Todo';
import {useSelector,useDispatch} from 'react-redux';

import { fetchTasks } from './slice/todoSlice';
import './styles.css';





function App() {
  //  const users = useSelector((state) => state.user.users)
  //  console.log(users,"jj")

  //display data from api
  const dispatch = useDispatch();
  const users = useSelector((state) => state.todo.tasks);
  console.log(users,"jjk")
  // const isLoading = useSelector((state) => state.todo.isLoading);
  // const error = useSelector((state) => state.todo.error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  // const [users,setUsers] = useState([
  // {note:"solve ds questions",id:1,isActive:false },
  // {note:"have launch @12",id:2,isActive:false},
  // {note:"have a meeting at 1am", id:3,isActive:false}])
  const [counter, setCounter] = useState(0)


  

  // const addNewUser = (newUser) => {
  //   //  setUsers([...users, newUser])
  //    dispatch(addUser(newUser))

  // }





  console.log(users)
  return (
    <div className="App">
     <Todo 
    //  addUser={addNewUser} 
    // tasks={tasks}
     users={users}  
     counterF={counter} setCounter={setCounter} 
    //  setUsers={setUsers}
     />
     
    </div>
  );
}

export default App;
