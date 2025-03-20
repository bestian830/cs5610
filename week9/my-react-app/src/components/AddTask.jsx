import React, { useState } from "react";

export default function AddTask() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    function submitHandler(e) {
        // e is the event object
        e.preventDefault();
        const newTask = { title: title, date:date };
        console.log(newTask);
        setTitle("");
        setDate("");
    }
    return (
        <form onSubmit={submitHandler}>
          <div className="form-control">
		    <label>Title</label>
            <input type="text" value={title} onChange={function (e) {setTitle(e.target.value);}} />
          </div>
          <div className="form-control">
		    <label>Date</label>
		    <input type="text" value={date} onChange={function (e) {setDate(e.target.value)}}></input>
          </div>
	        <button type="submit"> Save </button>
        </form>
    );
    }