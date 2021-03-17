const TodoItem = ({ todo, onRemove }) => {
    <li>
        <p>{todo}</p>
        <button onClick={() => onRemove()}></button>
    </li>
}

export default TodoItem