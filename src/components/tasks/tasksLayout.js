import { useImmerReducer } from 'use-immer';
import { Task } from './task';
import { TasksContext, TasksUpdateContext } from './tasksContext';

export function TasksView(initialTasks = []){
    const [tasks, queueUpdate] = useImmerReducer(tasksReducer, initialTasks);

    return (
        <TasksContext.Provider value = {tasks}>
            <TasksUpdateContext.Provider value = {queueUpdate}>
                <div className = "tasksContainer">
                    {
                        tasks.map(task => (
                            <Task task ={task}/>
                        ))
                    }
                </div>
            </TasksUpdateContext.Provider>
        </TasksContext.Provider>
    );
}

function tasksReducer(draft, action){
    switch(action.type){
        case "add":{
            break;
        }
        case "edit":{
            const index = draft.findIndex(task => task.id === action.id);
            draft[index].value = action.value;
            break;
        }
        case "delete":{
            break;
        }
        default:{
            throw Error(`[ERROR] Bad action: [${action.type}]`);
        }
    }
}