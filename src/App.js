import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {

  const [addButtonStatus, setAddButtonStatus] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5000/tasks`);
    const data = await res.json();
    return data;
  }

  // Fetch a Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }

  // Delete a Task
  const onDeleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method: 'DELETE'
      }
    )
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle a Reminder
  const toggleReminder = async (id) => {

    const taskToToggle = await fetchTask(id);
    const updateTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder
    }

    const res = await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updateTask)
      }
    )
    const data = await res.json();
    setTasks(
      tasks.map((task) => task.id === id
        ? { ...task, reminder: data.reminder }
        : task
      )
    )
  }

  const onAddTask = async (task) => {

    const res = await fetch(`http://localhost:5000/tasks`
      , {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })

    const data = await res.json();
    setTasks([...tasks, data]);
  }

  // On Add Button Click Handler
  const onAddClickHandle = () => {
    setAddButtonStatus(!addButtonStatus);
  }

  return (
    <div className="container">
      <Header title={"TODO APP"} onAddButton={onAddClickHandle} addButtonStatus={addButtonStatus} />
      {addButtonStatus && <AddTask onAdd={onAddTask} />}
      {
        tasks.length > 0
          ? <Tasks
            tasks={tasks}
            onDelete={onDeleteTask}
            onDoubleClick={toggleReminder} />
          : 'No tasks to show'
      }
    </div>
  );
}

export default App;
