import '../../styles/components/taskView.css';
import { useImmerReducer } from 'use-immer';
import { Task } from './task';
import { TasksUpdateContext } from './tasksContext';
import { AddTask } from './addTask';
import { Card } from '../decorators/card';

export function TasksView(){
    const [tasks, queueUpdate] = useImmerReducer(tasksReducer, initialTasks);
    console.log(tasks);

    return (
        <TasksUpdateContext.Provider value = {queueUpdate}>
            <AddTask/>
            <div className = "tasksContainer">
                {
                    tasks.map(t => (
                        <Card showOnHover={true}>
                            <Task task={t} key={t.id}/>
                        </Card>
                    ))
                }
            </div>
        </TasksUpdateContext.Provider>
    );
}

function tasksReducer(draft, action){
    switch(action.type){
        case "add":{
            draft.push({
                id: nextId++,
                value: action.text,
                done: false,
            })
            break;
        }
        case "edit":{
            const index = draft.findIndex(task => task.id === action.task.id);
            draft[index] = action.task;
            break;
        }
        case "delete":{
            console.log(action.id);
            return draft.filter(t => t.id !== action.id);
        }
        default:{
            throw Error(`[ERROR] Bad action: [${action.type}]`);
        }
    }
}

var nextId = 2; //for a simple todo, don't need a better solution
const initialTasks = [
  {id: 0, value: "Some random todo", done: false},
  {id: 1, value: "Some random todo #2", done: false},
]