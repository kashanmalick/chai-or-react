import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../features/todo/todoSlice";
import AddTodo from "./AddTodo";

function Todo() {
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  const handleSaveClick = () => {
    dispatch(editTodo({ id: editingId, text: editingText }));
    setEditingId(null);
    setEditingText("");
  };

  return (
    <>
      <AddTodo />
      <div className="mt-4 text-center text-2xl text-white p-2 bg-zinc-700 font-bold">
        Todos List
      </div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="text-black px-2 py-1 rounded"
                />
                <button
                  onClick={handleSaveClick}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md w-20"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <div className="text-white">{todo.text}</div>
                <div className="space-x-3">
                  <button
                    onClick={() => handleEditClick(todo)}
                    className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md w-20"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md w-20"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
