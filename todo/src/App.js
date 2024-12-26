import React, { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  const addTodo = () => {
    if (toDo.trim() !== "") {
      setToDos([
        ...toDos,
        { id: Date.now(), text: toDo, status: false },
      ]);
      setToDo(""); 
    }
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={addTodo} 
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div key={obj.id} className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    const updatedToDos = toDos.map((obj2) =>
                      obj2.id === obj.id
                        ? { ...obj2, status: e.target.checked }
                        : obj2
                    );
                    setToDos(updatedToDos);
                  }}
                  type="checkbox"
                  checked={obj.status}
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  className="fas fa-times"
                  onClick={() => {
                    
                    if (obj.status) {
                      setToDos(toDos.filter((obj2) => obj2.id !== obj.id));
                    } else {
                      alert("Please check the item before deleting.");
                    }
                  }}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
