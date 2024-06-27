import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef(null);
  console.log("rendering App");

  useEffect(() => {
    intervalRef.current = setInterval(() => setCounter((c) => c + 1), 1000);
    console.log("running useEffect");

    return () => {
      console.log("clearing Interval");
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="App">
      <div>Counter: {counter}</div>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
    </div>
  );
}

export default App;
