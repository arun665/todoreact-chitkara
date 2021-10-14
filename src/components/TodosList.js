import React from "react";

const TodosList=({todos,setTodos,setEditTodo})=>
{

   const handleDelete=({id})=>
   {
       setTodos(todos.filter((todo)=>todo.id!==id))
   }

   const handleComplete=(todo)=>
   {
       setTodos(
           todos.map((item)=>
           {
               if(item.id===todo.id)
               {
                   return {...item,completed:!item.completed}
               }
               return item;
           })
       )
   }

   const handleEdit=({id})=>
   {
        const findTodo=todos.find((todo)=>todo.id===id)
        setEditTodo(findTodo);
   }

   const handleUp=(id)=>
   {
       if(id-1!==-1)
       {
           const findTodo=todos.map((todo)=>{return todo});

           const val=findTodo[id];
           findTodo[id]=findTodo[id-1];
           findTodo[id-1]=val;

         console.log(findTodo);

           setTodos(findTodo);
       }
       else{
           console.log("Not possible");
       }
   }

   const handleDown=(id)=>
   {
        if(id+1 !== todos.length)
        {
            const findTodo=todos.map((todo)=>{return todo;});

            const val=findTodo[id];
            findTodo[id]=findTodo[id+1];
            findTodo[id+1]=val;
            setTodos(findTodo);
        }
        else{
            console.log("Not possible");
        }
   }

    return(
       <div>
            {todos.map((todo)=>(
                <li className="list-item" key={todo.id}>
                <input type="text" 
                value={todo.title}
                 className={`list ${todo.completed? "complete" : ""}`}
                onChange={(event)=>event.preventDefault()} 
                 />
                 <div>
                     <button className="button-complete task-buton" onClick={()=>handleComplete(todo)}>
                        Done
                     </button>

                     <button className="button-edit task-buton" onClick={()=>handleEdit(todo)}>
                     Edit
                     </button>

                     <button className="button-delete task-buton" onClick={()=>handleDelete(todo)}>
                     Delete
                     </button>
    
                     <button className="button-up task-buton" onClick={()=>handleUp(todo.id)}>
                        up
                     </button>

                     
                     <button className="button-down task-buton" onClick={()=>handleDown(todo.id)}>
                        down
                     </button>

                 </div>

                </li>
    ))}
       </div>
    )
}

export default TodosList;