import React from "react";
import { Provider } from "react-redux"; // Import Provider
import store from "./store"; // Import the Redux store

import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

import "./App.css"; // global CSS here

function App() {
  return (
    // Wrap your entire application with the Redux Provider
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 p-6 font-sans text-gray-800 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-center my-8 text-indigo-700">
          My ToDo List
        </h1>

        <div className="w-full max-w-2xl space-y-6">
          {/* Section for adding a new task */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-3xl font-bold mb-4 text-center text-blue-700">
              Add New Task
            </h2>
            <AddTask />
          </section>

          {/* Section for displaying and filtering tasks */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-3xl font-bold mb-4 text-center text-blue-700">
              Your Tasks
            </h2>
            <ListTask />
          </section>
        </div>
      </div>
    </Provider>
  );
}

export default App;
