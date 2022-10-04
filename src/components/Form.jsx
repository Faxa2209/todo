import { useState } from "react";

export default function Form({ addTask }) {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(inputValue);
        setInputValue("");
    };
    const handlePress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handlePress}
                type="text"
                placeholder="Type your task"
            />
            <button>Add</button>
        </form>
    );
}
