import { useContext, useState } from "react";
import { TasksUpdateContext } from "./tasksContext";

export function Task(task, update){

    const [isEditing, toggleEditMode] = useState(false);
    const [text, setText] = useState(task.value);
    const queueUpdate = useContext(TasksUpdateContext);

    return(
        <div classname="task">
            <input type="checkbox" value={task.done} className={task.done ? "task-complete" : "task-incomplete"} onChange={e => 
                queueUpdate({
                    type:'edit',
                    task:{
                        ...task,
                        done: e.target.checked,
                    }
                })}/>
            <div>
                {
                    isEditing ?
                    <input type="text" value={text} onChange={e => { setText(e.target.value) }}/> 
                    :
                    <span className={task.done ? "done" : ""}>{task.value}</span>
                }
            </div>
            <button onClick={e => {
                if(isEditing){
                    queueUpdate({
                        type:'edit',
                        task:{
                            ...task,
                            value: e.target.value,
                        }
                    })
                    toggleEditMode(!isEditing);
                }
                else{
                    toggleEditMode(!isEditing);
                }
            }} className="task-edit">{isEditing ? "Save" : "Edit"}</button>
            <button onClick={() => queueUpdate({
                    type: 'delete',
                    id: task.id
                })} 
            className="task-delete">Delete</button>
        </div>
    );
}
