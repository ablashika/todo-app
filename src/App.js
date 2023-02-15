import React,{useState,useEffect} from 'react';
import Todo from './components/Todo';
import logo from './logo.svg';
import './styles.css';




function App() {
  // const [isActive, setIsActive] = useState(false)

  const [users,setUsers] = useState([
  {note:"solve ds questions",id:1,isActive:false },
  {note:"have launch @12",id:2,isActive:false},
  {note:"have a meeting at 1am", id:3,isActive:false}])
  const [counter, setCounter] = useState(0)


  
  //adding new user

  const addNewUser = (newUser) => {
     setUsers([...users, newUser])

  }



  console.log(users)
  return (
    <div className="App">
     <Todo addUser={addNewUser} users={users}  counterF={counter} setCounter={setCounter} setUsers={setUsers}/>
     
    </div>
  );
}

export default App;
