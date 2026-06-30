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

/*
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
import { useEffect, useState } from 'react'
import './App.css'
/*
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Backtest from './pages/Backtest'

function App() {
    // URL of the api
    const url = "http://localhost:5000/api/health";

    // Basically, we are instantiating the variables that we assume exist within the API
    const [apiVariable, setStatusData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();

                setStatusData(json);
                setIsLoading(false);
            }
            catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);

    if (isLoading) return <div>Loading...</div>;

    const { message, status } = apiVariable;

    return (
        <>
            <div>
                <h1>{message}</h1>
                <p>{status}</p>
            </div>
        </>
    );
}

export default App;
*/