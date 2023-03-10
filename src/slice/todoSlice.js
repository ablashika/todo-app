import { createSlice } from '@reduxjs/toolkit'
import { TodoistApi } from "@doist/todoist-api-typescript"
//creating initial state
// const initialState = {
  
// }
const todoSlice = createSlice({
    name:"users",
    initialState:{tasks: [], isLoading: false, error: null },
    reducers:{
        setLoading: (state, action) => {
            state.isLoading = action.payload;
          },
          setError: (state, action) => {
            state.error = action.payload;
          },
          setTasks: (state, action) => {
            state.tasks = action.payload;
          },

          deleteTasks: (state, action) => {
            const userId = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== userId);
            
          },
          
          addTask: (state,action)=>{
            state.tasks.push(action.payload);
            // state.tasks = action.payload
            // state.users = [...state.users, action.payload]
        },

        toggleActive:(state,action)=>{
            const userId = action.payload;
            const user = state.tasks.find(user => user.id === userId)
            if (user.isCompleted === true) {
                user.isCompleted = false;
              } else {
                user.isCompleted= true;
              }
            // if (user) {
            //     user.isActive = !user.isActive;
            //   }
        },
        // deleteUser:()=>{

        // }
    

    }


   

})


export const { setLoading, setError, setTasks,toggleActive } = todoSlice.actions;

export const fetchTasks = () => async (dispatch) => {
    const api = new TodoistApi("8fa533a6c9541c316e694c5125cf8bad79c04606")
  try {
    const tasks = await api.getTasks()
    dispatch(setTasks(tasks))
    
    console.log(tasks)
  } catch (error) {
    console.log(error)
  }
//   
//   try {
//     const response = await axios.get("https://your-api-url.com/tasks");
//     dispatch(setTasks(response.data));
//   } catch (error) {
//     dispatch(setError(error.message));
//   }
//   dispatch(setLoading(false));
};


// export const addTask = (task) => async (dispatch) => {
//     const api = new TodoistApi("8fa533a6c9541c316e694c5125cf8bad79c04606")
//   try {
//     const tasks = await 
//     api.addTask(task)
//     dispatch(addTask(tasks))
//     console.log(tasks)
//   } catch (error) {
//     console.log(error)
//   } 
// }

export const addTask = (task) => async (dispatch, getState) => {
    const api = new TodoistApi("8fa533a6c9541c316e694c5125cf8bad79c04606");
    try {
      const newTask = await api.addTask(task);
      const currentTasks = getState().todo.tasks;
      const updatedTasks = [...currentTasks, newTask];
      dispatch(setTasks(updatedTasks));
      console.log(newTask,"kdk");
    } catch (error) {
      console.log(error);
    }
  };


  export const deleteTask = (taskId) => async (dispatch, getState) => {
    console.log('taskId:', taskId);
    const api = new TodoistApi("8fa533a6c9541c316e694c5125cf8bad79c04606");
    try {
      await api.deleteTask(taskId);
      const currentTasks = getState().todo.tasks;
      const updatedTasks = currentTasks.filter((task) => task.id !== taskId);
      dispatch(setTasks(updatedTasks));
    } catch (error) {
      console.log(error);
    }
  };

//   export const deleteTask = (taskId) => async (dispatch, getState) => {
//     console.log('taskId:', taskId);
//     const api = new TodoistApi("8fa533a6c9541c316e694c5125cf8bad79c04606");
//     try {
//       await api.deleteTask(taskId);
//       const currentTasks = getState().todo.tasks;
//     //   const updatedTasks = currentTasks.filter((task) => task.id !== taskId);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  


//   api.deleteTask("2995104339")
//     .then((isSuccess) => console.log(isSuccess))
//     .catch((error) => console.log(error))

export default todoSlice.reducer;
