
import React, {useState} from 'react';
import './App.css';

function App() {
  const[count,setCount] = useState(0);
  const handleClick = () =>{
    setCount(count + 1);
  }
  const handleClickdic = () =>{
    setCount(count - 1);
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClickdic}>-</button>
    </div>
  );
}

export default App;
