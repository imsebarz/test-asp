import { useState } from "react";
import "./App.css";
import { mergeSort } from "./order";

function App() {
  const [original, setOriginal] = useState([]);
  const [ordered, setOrdered] = useState([]);
  const [value, setValue] = useState(0);

  const orderVector = () => {
    setOrdered(mergeSort(original));
  };

  const addElement = (e, value) => {
    e.preventDefault();
    setOriginal([...original, parseInt(value)]);
    setValue(0);
    console.log(original);
  };

  const updateValue = () => {};
  return (
    <div className="App">
      <h1 className="title">Pantalla que ordena un vector</h1>
      <div className="vector">
        <div className="vector-original">
          <form onSubmit={(e) => addElement(e, value)}>
            <input
              type="number"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <button>Adicionar elemento</button>
          </form>
          {original.map((item) => (
            <p type="text" key={Math.random()} className="vector-element">
              {item}
            </p>
          ))}
        </div>
        <div className="vector-ordered">
          {ordered.map((item) => {
            return <p className="vector-element">{item}</p>;
          })}
        </div>
      </div>
      <button className="order" onClick={orderVector}>
        ordenar el vector
      </button>
    </div>
  );
}

export default App;
