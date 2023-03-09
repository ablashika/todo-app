import React,{useState,useEffect} from 'react';
import Todo from './components/Todo';
import logo from './logo.svg';
import { useDispatch, useSelector} from 'react-redux';
import './styles.css';
import { addUser } from './slice/userSlice';






function App() {
  // const [isActive, setIsActive] = useState(false)
   const dispatch = useDispatch()
   const users = useSelector((state) => state.user.users)
   console.log(users,"jj")

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
     users={users}  
     counterF={counter} setCounter={setCounter} 
    //  setUsers={setUsers}
     />
     
    </div>
  );
}

export default App;
