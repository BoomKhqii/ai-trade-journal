import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Backtest from './pages/Backtest';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/backtest" element={<Backtest />} />
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