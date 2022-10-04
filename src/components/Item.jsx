import deleteSvg from "../assets/delete.svg";

export default function Item({ todo, removeTask, completeTask }) {
    return (
        <li className="list__item">
            <span
                onClick={() => completeTask(todo.id)}
                className={todo.complete ? "strike" : ""}
            >
                {todo.task}
            </span>
            <img
                onClick={() => removeTask(todo.id)}
                src={deleteSvg}
                alt="Hello"
                className="list__item-icon"
            />
        </li>
    );
}
