import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleDone, editTask } from "../store/todoSlice"; // Adjust path as needed

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  // Handle toggling the 'isDone' status
  const handleToggle = () => {
    dispatch(toggleDone(task.id));
  };

  // Handle saving the edited description
  const handleEdit = () => {
    if (newDescription.trim() && newDescription !== task.description) {
      dispatch(editTask({ id: task.id, newDescription }));
      setIsEditing(false); // Exit editing mode
    } else {
      setIsEditing(false); // Exit editing mode even if no change or empty
    }
  };

  // Handle key press for editing (e.g., Enter to save)
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEdit();
    }
  };

  return (
    <div
      className={`flex items-center justify-between p-4 border-b border-gray-200 last:border-b-0
                    ${task.isDone ? "bg-green-50" : "bg-white"} rounded-md`}
    >
      <div className="flex items-center flex-grow">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={handleToggle}
          className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
        />
        {isEditing ? (
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            onBlur={handleEdit} // Save on blur
            onKeyPress={handleKeyPress} // Save on Enter
            className="ml-3 flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            autoFocus // Automatically focus when entering edit mode
          />
        ) : (
          <span
            className={`ml-3 text-lg flex-grow break-words ${
              task.isDone ? "line-through text-gray-500" : "text-gray-800"
            }`}
            onDoubleClick={() => setIsEditing(true)} // Double click to edit
          >
            {task.description}
          </span>
        )}
      </div>
      <div className="flex-shrink-0 ml-4">
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="ml-2 p-2 rounded-full text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            title="Edit Task"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.38-2.828-2.828z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
