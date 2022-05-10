import Header from './component/header';
import Form from './component/form';
import {useState} from 'react';
function App() {
  const [todo,setTodo] = useState('');
  const [todolist,seTtodolist] = useState([]);
  return (
    <div className="App">
      <Header></Header>
      <Form 
      todo={todo} 
      setTodo={setTodo} 
      todolist={todolist} 
      seTtodolist={seTtodolist}>
        
      </Form>
    </div>
  );
}

export default App;
