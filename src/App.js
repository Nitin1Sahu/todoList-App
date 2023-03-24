import { useState } from 'react';
import './App.css';
import Task from './Task';


function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }
  const addTaskToFeed = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setToDoList([...toDoList, task])
  }
  const deleteTask = (id) => {
    const newToDoList = toDoList.filter((task) => {
      if (task.id === id) {
        return false;
      }
      return true;
    })
    setToDoList(newToDoList)
  }

  const completeTask = (id) => {
    setToDoList(
      toDoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    )
  }
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="container">
        <input type="text" onChange={handleChange} />
        <button onClick={addTaskToFeed}>Add Task</button>
      </div>
      <div className="list">
        {toDoList.map((task) => {
          return <Task taskName={task.taskName} id={task.id} completed={task.completed} deleteTask={deleteTask} completeTask={completeTask} />
        })}
      </div>
    </div>
  );
}

export default App;
