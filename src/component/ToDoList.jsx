import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskname: "brush",
      completed: false,
    },
    {
      id: 2,
      taskname: "bath",
      completed: false,
    },
    {
      id: 3,
      taskname: "eat",
      completed: false,
    },
  ]);
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const addTask = () => {
    const newid = tasks.length ? Math.max(...tasks.map((i) => i.id)) + 1 : 1;
    if (input.trim() !== "") {
      setTasks((prev) => [...prev, { id: newid, taskname: input }]);
    }
    setInput("");
  };
  const deleteHandler = (id) => {
    const del = tasks.filter((list) => {
      return list.id !== id;
    });

    setTasks(del);
  };

  const toggleCompleted = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div className="bg-gray-700 w-3xl items-center justify-cener min-h-screen ">
      <div className="row">
        <div className="col text-center">
          <h1 className="text-2xl text-bold text-white py-3">To Do List</h1>
        </div>
      </div>
       <div className="row">
        <div className="col text-center">
          <input
          type="text"
          className="border-amber-50 p-2 bg-amber-50 text-black"
          value={input}
          onChange={changeHandler}
        />
      
        </div>
        <div className="col text-center">
            <button
          className="bg-amber-50 text-black px-3 py-1 rounded-lg"
          onClick={addTask}
        >
          Add Task
        </button>
        </div>
      </div>

     
      <div className="p-4 justify-cener w-[50%] mx-auto">
        {tasks &&
          tasks.map((list) => (
            <div key={list.id} className="m-2 row">
                <div className="col">
             
                <input
                  type="checkbox"
                  className="ml-2"
                  checked={list.completed}
                  onChange={() => toggleCompleted(list.id)}
                />
                
             </div>

              <div className="col">
                 <p
                   className={`p-2 w-10 ${list.completed ? "line-through text-gray-300" : ""}`}
                 >
                   {list.taskname}
                 </p>
              </div>
                          
             <div className="col">
                <button
                onClick={() => deleteHandler(list.id)}
                className="bg-amber-50 text-black ml-3 px-2 py-2 rounded-lg"
              >
                Delete
              </button>
             </div>
           
            </div>
            
          ))}
      </div>
    </div>
  );
};

export default ToDoList;
