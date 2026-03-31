import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskname: "brush",
    },
    {
      id: 2,
      taskname: "bath",
    },
    {
      id: 3,
      taskname: "eat",
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
  return (
    <div className="bg-gray-700 w-3xl items-center justify-cener min-h-screen ">
      <div className="flex text-center">
        <input
          type="text"
          className="border-amber-50 p-2 mt-5 bg-amber-50 text-black"
          value={input}
          onChange={changeHandler}
        />
        <button
          className="bg-amber-50 text-black ml-3 px-3 py-1 rounded-lg"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <div className="p-4  justify-cener">
        {tasks &&
          tasks.map((list) => (
            <div key={list.id} className="flex m-2">
              <p className="p-2 w-10">{list.taskname}</p>
              <button
                onClick={() => deleteHandler(list.id)}
                className="bg-amber-50 text-black ml-3 px-2 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ToDoList;
