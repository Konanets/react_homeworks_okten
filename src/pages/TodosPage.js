import React, {useEffect, useState} from 'react';

import {getService} from "../services/jsonPlaceHolder.service";
import {Todo} from "../components";

const TodosPage = () => {

    const [todos,setTodos]=useState([]);

    useEffect(()=>{
        getService.getTodos().then(({data})=>setTodos(data))
    },[])

    return (
        <div>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {TodosPage};