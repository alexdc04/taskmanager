import React from 'react';
import axios from 'axios';

// stylesheets
import './styles/App.css';
import Navbar from './components/Navbar.jsx';
import TaskSubmit from './components/taskSubmit.jsx';

export default function App() {
    return (
        <div>
            <Navbar />
            <TaskSubmit />
        </div>
    );
}

