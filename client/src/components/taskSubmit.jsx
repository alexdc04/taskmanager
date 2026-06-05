// import stylesheet
import "../styles/taskSubmit.css";
import axios from 'axios';

export default function TaskSubmit() {
    function submit(data) {
        const name = data.get("taskName");
        const date = data.get("dueDate");
        alert(`Task name: '${name}' and date: '${date}'`)
    }

    return (
        <div className = "taskSubmit">
            <form action = {submit}>
              <input name = "taskName" id = "taskNameInput"></input>
              <input name = "dueDate" id = "taskDateInput" type = "datetime-local"></input>
              <button type = "submit">Add Task</button>
            </form>
        </div>
    );
}