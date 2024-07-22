
import './App.css'
import Header from './components/custom/Header'
import TodoList from './components/custom/TodoList'
import { Button } from './components/ui/button'
import { TodoProvider } from './context/TodoContext'

function App() {

  return (

      <div className='container'>
        <TodoProvider>
          <Header/>
          <TodoList/>
        </TodoProvider>

      </div>
  )
}

export default App
