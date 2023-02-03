import React,{useState} from 'react';
import Todo from './components/Todo';
import logo from './logo.svg';
import './styles.css';




function App() {

  const [users,setUsers] = useState([
  {note:"solve ds questions",id:1},
  {note:"have launch @12",id:2},
  {note:"have a meeting at 1am", id:3}])


  //adding new user

  const addNewUser = (newUser) => {

    // console.log([...users, newUser]);
     setUsers([...users, newUser])

  }



  console.log(users)
  return (
    <div className="App">
     <Todo addUser={addNewUser} users={users} />
     
    </div>
  );
}

export default App;
