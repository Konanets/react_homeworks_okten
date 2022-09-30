import {useEffect, useState} from "react";
import {getService} from "../../services";
import {Todo} from "./Todo";

const Todos = () => {

    const [todos,setTodos]=useState([])

    useEffect(()=>{
        getService.getTodos().then(({data})=>setTodos(data))
    },[])

    return (
        <div>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};