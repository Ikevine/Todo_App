import styles from './style.module.css';

const form =({todo,setTodo,todolist,seTtodolist})=>{
const handleChange =(event)=>{
   setTodo(event.target.value);
   console.log(todo);
 }
 const handleSubmit=(event) =>{
     event.preventDefault();
     seTtodolist([...todolist,todo]);
     console.log(todolist);
 }
    return(<div className={styles.todoform}>
        <form onSubmit={handleSubmit}>
            <input value={todo} onChange={handleChange} className={styles.todoinput} placeholder="Add todo items"></input>
            <button type="submit" className={styles.btn}>Add</button>
        </form>
    </div>)
}

export default form;