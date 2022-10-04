import { useState, useEffect } from "react";

import Form from "./components/Form";
import Item from "./components/Item";

function App() {
    const [todos, setTodos] = useState([]);
    const addTask = (inputValue) => {
        if (inputValue) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: inputValue,
                complete: false,
            };
            setTodos([...todos, newItem]);
        }
    };
    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)]);
    };
    const completeTask = (id) => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id
                    ? { ...todo, complete: !todo.complete }
                    : { ...todo }
            ),
        ]);
    };
    return (
        <div className="App">
            <div className="header">
                <h1 className="header__title">ToDo List</h1>
                <p className="header__amount">Tasks amount : {todos.length}</p>
            </div>
            <Form addTask={addTask} />
            <ul className="list">
                {todos.map((todo) => (
                    <Item
                        key={todo.id}
                        todo={todo}
                        completeTask={completeTask}
                        removeTask={removeTask}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;
