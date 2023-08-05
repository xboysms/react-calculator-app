import './App.css';
import {
  useState,
  useRef
} from "react"; 
import "./assets/styles.css";

function App() {
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => {
      const value = result + Number(inputRef.current.value);
      return value;
    }); 
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function 
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function multiply(e) {
    // Add the code for the plus function
    e.preventDefault();
    setResult((result) => {
      const value = result * Number(inputRef.current.value);
      return value;
    });
  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault();
    inputRef.current.value = null;
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function
    e.preventDefault(); 
    setResult((result) => result = 0); 
  }; 

  return (
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}>
          Result: {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>minus</button>
        <button onClick={multiply}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset</button>
        <button onClick={resetResult}>reset Result</button>
      </form> 
    </div> 
  );
}

export default App;
