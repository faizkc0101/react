import React, { useState } from "react";
import "./Reminder.css";
function Reminder() {
  const [reminder, setReminder] = useState([]);
  const [newReminder, setNewReminder] = useState("");

  const handliInputChange = (event) => {
    setNewReminder(event.target.value);
  };

  const handleAddRemainder = () => {
    if (newReminder.trim()) {
      setReminder([...reminder, newReminder]);
      setNewReminder("");
    }
  };
  const handleDeleteReminder=(index)=>{
    setReminder(reminder.filter((Item,itemIndex)=>itemIndex != index))
  }
  return (
    <div className="container">
      <h1>Remainder app</h1>
      <div className="input-container">
        <input
        value={newReminder}
          onChange={handliInputChange}
          type="text"
          placeholder="enter a remainder"
        ></input>
        <button onClick={handleAddRemainder} className="add-btn">
          add remainder
        </button>
      </div>
      { reminder.length >0 ?
        <ul className="remainder-list">
        {reminder.map((data, index) => {
          return <li className="li" key={index}>{data}  <button onClick={()=>handleDeleteReminder(index)} className="delete-btn">Delete</button> </li>;
        })}
      </ul>:<p>empty</p>}
    </div>
  );
}

export default Reminder;
