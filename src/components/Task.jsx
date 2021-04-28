import { FaTimes } from 'react-icons/fa';

function Task({ task, onDelete, onDoubleClick }) {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onDoubleClick(task.id, task.reminder)}>
            <h3 >
                {task.text}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
            <p>{task.reminder ? 'Reminder: ON' : 'Reminder: OFF'}</p>
        </div>
    )
}

export default Task
