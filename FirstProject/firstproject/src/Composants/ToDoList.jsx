import '../App.css';
import {useState} from "react";


function ToDoList(){
    const items = [
        { id: 1, txt: 'Apprendre react'},
        { id: 2, txt: 'Créer un projet'},
        { id: 3, txt: 'Devenir expert'}
          ];
    return(
    <ul>
        {items.map(todo => (
            <li key={todo.id}>{todo.txt}</li>
        ))}
    </ul>
    );
}

export default ToDoList;
