export default function Task(props) {
    return (
        <div className='task' >
            <h3 style={{ textDecoration: props.completed ? "line-through" : "none" }}>{props.taskName}</h3>
            <button onClick={() => props.completeTask(props.id)}>Complete</button>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
    )
}
