import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { increment, decrement, incrementBy } from './store/slices/counter/counterSlice'

function App() {
  const {counter} =useSelector(state => state.counter)
  const dispatch = useDispatch();


  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     
      <div className="card">
        <button onClick={()=> {dispatch(increment())}}>
          count is {counter}
        </button>
      
      </div>
      
      <button type='button' onClick={()=> dispatch(increment())}>
      Increment
      </button>
      <button type='button' onClick={()=> dispatch(decrement())}>
      Decrement
      </button>
      <button type='button' onClick={()=> dispatch(incrementBy(2))}>
      Increment By 2
      </button>
    </div>
  )
}

export default App
