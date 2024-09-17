import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function handleClick(){
    if(counter===20){
      return;
    }
    setCounter((prevState) => { return prevState +1});
    setCounter((prevState) => { return prevState +1});
    setCounter((prevState) => {return prevState +1});
    setCounter((prevState) => (prevState +1));
    setCounter(prevState => prevState +1);
  }
  const clickHandle = () => {
    if(counter===0){
      return;
    }
    setCounter(counter-1);
  }

  return (
    <>
      <h2>Counter</h2>
      <h3>Counter is {counter}</h3>
      <button onClick={handleClick}>Add</button>
      <button onClick={clickHandle}>Decrease</button>
    </>
  )
}

export default App
