import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './store/counterSlice';
import './App.css';

function App() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Counter</h1>
        <p>Count: {count}</p>
        <div>
          <button onClick={() => dispatch(increment())}>Incrementar</button>
          <button onClick={() => dispatch(decrement())}>Decrementar</button>
          <button onClick={() => dispatch(reset())}>Resetar</button>
        </div>
      </header>
    </div>
  );
}

export default App;
