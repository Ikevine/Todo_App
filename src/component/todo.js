
import styles from './style.module.css'
const todo = ({value})=>{
     
    return(<div>
        <div className={styles.todolis}>
            <h3 className={styles.todoitems}>{value}</h3>
            <button className={styles.deletebtn}>Done</button>
        </div>
    </div>)
}

export default todo;