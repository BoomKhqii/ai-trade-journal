import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Backtest from './pages/Backtest';
import Accounts from './pages/Accounts';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/backtest" element={<Backtest />} />
                <Route path="/account" element={<Accounts />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

/*
import { useEffect, useState } from "react";

function Dashboard() {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/api/health")
            .then((response) => response.json())
            .then((data) => {
                setMessage(data.message);
                setStatus(data.status);
            })
            .catch((error) => {
                console.error("Backend connection failed:", error);
            });
    }, []);

    return (
        <div>
            <h1>AI Trade Journal</h1>
            <p>{message}</p>
            <p>Status: {status}</p>
        </div>
    );
}

export default Dashboard;

*/