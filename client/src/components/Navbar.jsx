// import stylesheet
import "../styles/Navbar.css";

export default function Navbar() {
    function newTask() {
        alert("New task!");
    }

    function aboutPage() {
        alert("About page!");
    }

    return (
        <div className = "navbar">
            <button class = "navbutton" onClick = {newTask}>Create a new task</button>
            <button class = "navbutton" onClick = {aboutPage}>About</button>
        </div>
    );
}