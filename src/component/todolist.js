import Todo from './todo'

const todolist = ({todolist})=>{

    return (<div>
       {todolist.map((value)=>(

          <Todo value={value}></Todo>
       ))} 
         
    </div>)
}

export default todolist;