import '../../styles/components/addTask.css'
import { useState, useContext } from "react";
import { TasksUpdateContext } from "./tasksContext";
import { Button } from '../button';


export function AddTask(){
    const [text, setText] = useState("");
    const queueUpdate = useContext(TasksUpdateContext);

    return(
      <div className="addTask">
        {/*TODO add submit on Enter*/}
        <input type="text" placeholder="Type your todo here..." onChange={e => setText(e.target.value)} value={text}></input>
        <Button onButtonClick={onAddButtonClick} value="Add"/>
      </div>  
    );

    function onAddButtonClick(){
      queueUpdate({
        type: 'add',
        text: text,
      });
      setText("");
    }
}