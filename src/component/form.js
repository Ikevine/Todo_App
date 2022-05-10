import styles from './style.module.css';

const form =()=>{

    return(<div>
        <form className={styles.todoform}>
            <input className={styles.todoinput} placeholder="Add todo items"></input>
            <button className={styles.btn}>Add</button>
        </form>
    </div>)
}

export default form;