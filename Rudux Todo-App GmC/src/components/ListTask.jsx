import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../store/todoSlice"; // Corrected path
import Task from "./Task"; // Assuming Task.jsx is in the same directory

const ListTask = () => {
  // Select all todos and the current filter from the Redux store
  const allTodos = useSelector((state) => state.todos.todos);
  const currentFilter = useSelector((state) => state.todos.filter);
  const dispatch = useDispatch();

  // Filter logic based on the current filter state
  const filteredTodos = allTodos.filter((todo) => {
    if (currentFilter === "all") {
      return true;
    }
    if (currentFilter === "done") {
      return todo.isDone;
    }
    if (currentFilter === "not_done") {
      return !todo.isDone;
    }
    return true; // Fallback
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => dispatch(setFilter("all"))}
          className={`px-5 py-2 rounded-full font-semibold transition duration-200 ease-in-out
                      ${
                        currentFilter === "all"
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
        >
          All
        </button>
        <button
          onClick={() => dispatch(setFilter("done"))}
          className={`px-5 py-2 rounded-full font-semibold transition duration-200 ease-in-out
                      ${
                        currentFilter === "done"
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
        >
          Done
        </button>
        <button
          onClick={() => dispatch(setFilter("not_done"))}
          className={`px-5 py-2 rounded-full font-semibold transition duration-200 ease-in-out
                      ${
                        currentFilter === "not_done"
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
        >
          To Do
        </button>
      </div>

      {filteredTodos.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-8">
          No tasks found for this filter.
        </p>
      ) : (
        <div className="space-y-3">
          {filteredTodos.map((todo) => (
            <Task key={todo.id} task={todo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListTask;
