import Image from "next/image";

export default function Home() {
  return (
    <><div className="container">
      <h1>To-Do List</h1>
      <div className="todo-container">
        <input type="text" id="new-task" placeholder="Add a new task"></input>
          <button id="add-task">Add Task</button>
          <ul id="task-list">
          </ul>
      </div>
    </div></>
  );
}

