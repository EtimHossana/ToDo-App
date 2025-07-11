import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice"; // Corrected path to todoSlice

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch(addTodo(description)); // Dispatch addTodo action with description
      setDescription(""); // Clear input field
    } else {
      console.warn("Task description cannot be empty."); // Using console.warn instead of alert
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 p-4 bg-white rounded-lg shadow-md"
    >
      <input
        type="text"
        placeholder="Add a new todo..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md
                   hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                   transition duration-200 ease-in-out"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
