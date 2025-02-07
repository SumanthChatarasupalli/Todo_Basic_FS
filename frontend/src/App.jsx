import { useState,useEffect } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

// useEffect hook
function App() {
  const [todos, setTodos] = useState([]);
//use effect is a hook which has two parameters one is the fn to perform and the second one is dependencies.
//if dependencies list is empty [] then it will run only once or when page is reloaded 
//if dependencies list is filled by any state  then the fn which is passed as a parameter will render again.
  useEffect(() => {
    fetchTodos();
  }, []);
  
  /*
 ## Flow of Code
 1---On opening the Page the UseEffect Hook runs and Prints if there is ant Existing data present for the user and if there is no data then nothing gets printed on screen
 2---When Ever a new todo is created and added then the todo state is changed and the fetchTodos fn is called and then then setTodos is called which then causes a render wherever the todos are used so that will make the Todos Component render again.
  */
  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:3000/todos");
      const data = await res.json();
      console.log("in reacrt app")
      setTodos(data.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  return (
    <div>
      <CreateTodo updateTodo={ fetchTodos}></CreateTodo>   
      <Todos todos={todos}></Todos>
    </div>
  )
}
/*
We are passing the fetchTodos fn as props to createtodo component and it will be called whenever a new todo is added succesfully into 
the database and then the fetchTodo fn does it work
*/
export default App