import '../../styles/components/task.css'
import { useContext, useState} from "react";
import { TasksUpdateContext } from "./tasksContext";
import { Button } from "../button";

export function Task({task}){

    const [isEditing, toggleEditMode] = useState(false);
    const [text, setText] = useState(task.value);
    const queueUpdate = useContext(TasksUpdateContext);

    return(
        <div className={`task ${task.done ? "complete" : ""}`}>
            <input type="checkbox" value={task.done} className="checkbox" onChange={e => 
                queueUpdate({
                    type:'edit',
                    task:{
                        ...task,
                        done: e.target.checked,
                    }
                })}/>
            <div className="text">
                {
                    isEditing ?
                    <input type="text"rows={1} value={text} onChange={e => { setText(e.target.value)}}/> 
                    :
                    <span className={task.done ? "done" : ""}>{text}</span>
                }
            </div>
            <div className="buttons">
                <Button className={isEditing ? 'save' : 'edit'} onButtonClick = {onEditButtonClick} value = {isEditing ? "Save" : "Edit"}/>
                <Button onButtonClick = {onDeleteButtonClick} value = "Delete"/>
            </div>
        </div>
    );

    function onDeleteButtonClick(){
        queueUpdate({
            type: 'delete',
            id: task.id
        })
    }

    function onEditButtonClick(e){
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
    }
}
