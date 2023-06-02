import { useState, useContext, useRef } from "react";
import { TasksUpdateContext } from "./tasksContext";


export function AddTask(){
    const inputRef = useRef(null);
    const [text, setText] = useState("");
    const queueUpdate = useContext(TasksUpdateContext);

    return(
      <div>
        {/*TODO add submit on Enter*/}
        <input type="text" placeholder="Type your todo here..." onChange={e => setText(e.target.value)} value={text}></input>
        <button onClick={() => {
            queueUpdate({
                type: 'add',
                text: text,
            });
            setText("");
        }}>Add</button>
      </div>  
    );
}