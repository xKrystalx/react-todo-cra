import './App.css';
import { TasksView } from './components/tasks/tasksLayout'

export default function App() {
  return (
    <div>
      <TasksView initialTasks={tasks} />
    </div>
  );
}

const tasks = [
  {id: 0, value: "Some random todo", done: false},
]