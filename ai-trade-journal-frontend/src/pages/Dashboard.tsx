import { useState, useEffect } from 'react';
import './css/Dashboard.css';

import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';


function Dashboard() {

    const [winRate, setWinRate] = useState(0);
    const [maximumDrawdown, setMaximumDrawdown] = useState(0);
    const [sharpeRatio, setSharpeRatio] = useState(0);
    const [initialBalance, setInitialBalance] = useState(0);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Fetch data from the .NET backend API
        fetch('http://localhost:5000/api/backtest')
            .then((response) => response.json())
            .then((data) => {
                // Destructure and assign multiple variables from the JSON object
                setWinRate(data.winRate);
                setMaximumDrawdown(data.maximumDrawdown);
                setSharpeRatio(data.sharpeRatio);
                setInitialBalance(data.initialBalance);
                setLoading(false);
            })
            /*
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });*/
    }, []);

    

    const equityData = [
        { trade: 'T1', AUS200: 1700, SPX500: 1700, NAS100: 1700, Total: 5100 },
        { trade: 'T2', AUS200: 1760, SPX500: 1680, NAS100: 1710, Total: 5150 },
        { trade: 'T3', AUS200: 1710, SPX500: 1740, NAS100: 1690, Total: 5140 },
        { trade: 'T4', AUS200: 1820, SPX500: 1780, NAS100: 1725, Total: 5325 },
        { trade: 'T5', AUS200: 1900, SPX500: 1810, NAS100: 1790, Total: 5500 },
        { trade: 'T6', AUS200: 1860, SPX500: 1880, NAS100: 1840, Total: 5580 },
        { trade: 'T7', AUS200: 1950, SPX500: 1940, NAS100: 1900, Total: 5790 },
    ];

    const monthlyProfitData = [
        { month: 'Jan', profit: 320 },
        { month: 'Feb', profit: -120 },
        { month: 'Mar', profit: 540 },
        { month: 'Apr', profit: 210 },
        { month: 'May', profit: -80 },
        { month: 'Jun', profit: 690 },
        { month: 'Jul', profit: 410 },
        { month: 'Aug', profit: 120 },
        { month: 'Sep', profit: -200 },
        { month: 'Oct', profit: 370 },
        { month: 'Nov', profit: 260 },
        { month: 'Dec', profit: 720 },
    ];

    const marketResults = [
        {
            market: 'AUS200',
            data: [
                { name: 'Profit', value: 67 },
                { name: 'Loss', value: 35 },
                { name: 'BE', value: 12 },
            ],
        },
        {
            market: 'SPX500',
            data: [
                { name: 'Profit', value: 51 },
                { name: 'Loss', value: 42 },
                { name: 'BE', value: 8 },
            ],
        },
        {
            market: 'NAS100',
            data: [
                { name: 'Profit', value: 74 },
                { name: 'Loss', value: 39 },
                { name: 'BE', value: 15 },
            ],
        },
    ];

   /*
    const [marketResults, setMarketResults] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/marketresults")
            .then((response) => response.json())
            .then((data) => {
                setMarketResults(data);
            })
            .catch((error) => {
                console.error("Failed to fetch market results:", error);
            });
    }, []);
    */
    const pieColors = ['#22c55e', '#ef4444', '#94a3b8'];

    const monthNames = [
        'JANUARY',
        'FEBRUARY',
        'MARCH',
        'APRIL',
        'MAY',
        'JUNE',
        'JULY',
        'AUGUST',
        'SEPTEMBER',
        'OCTOBER',
        'NOVEMBER',
        'DECEMBER',
    ];

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const today = new Date();

    const [currentDate, setCurrentDate] = useState(
        new Date(today.getFullYear(), today.getMonth(), 1)
    );

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const calendarDays = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        calendarDays.push(day);
    }

    while (calendarDays.length < 42) {
        calendarDays.push(null);
    }

    if (loading) return <p>Loading data...</p>;

    function previousMonth() {
        setCurrentDate(new Date(year, month - 1, 1));
    }

    function nextMonth() {
        setCurrentDate(new Date(year, month + 1, 1));
    }

    function isToday(day: number) {
        return (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        );
    }

    //const monthColor = colors[month];
    const monthColor = '#808080';

    return (
        <>
            <div id="container-dashboard">
                <div id="stats-bar">
                    <h4>
                        <b>Initial balance:</b> { initialBalance }<br/>
                        <b>Drawdown:</b> -%{ maximumDrawdown }<br/>
                        <b>Profitable Trades:</b> { winRate}% 67/345<br/>
                        <b>Sharpe Ratio:</b> { sharpeRatio }<br/>
                    </h4>
                </div>
                <div id="calendar">
                    <div id="calendar_header" style={{ backgroundColor: monthColor }}>
                        <button onClick={previousMonth} className="calendar_arrow">
                            ‹
                        </button>

                        <h1>
                            {monthNames[month]} {year}
                        </h1>

                        <button onClick={nextMonth} className="calendar_arrow">
                            ›
                        </button>
                    </div>

                    <div id="calendar_weekdays">
                        {weekDays.map((day) => (
                            <div key={day} style={{ color: monthColor }}>
                                {day}
                            </div>
                        ))}
                    </div>

                    <div id="calendar_content">
                        {calendarDays.map((day, index) => {
                            if (day === null) {
                                return <div key={index} className="calendar_day blank"></div>;
                            }

                            const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

                            const calendarNotes: Record<string, string[]> = {
                                '2026-06-22': ['Backtest review', 'AUS200 ORB'],
                                '2026-06-25': ['Check journal'],
                                '2026-06-29': ['Strategy update'],
                            };

                            const notes = calendarNotes[key] || [];

                            return (
                                <div
                                    key={index}
                                    className={`calendar_day ${isToday(day) ? 'today' : ''}`}
                                    style={isToday(day) ? { backgroundColor: monthColor } : {}}
                                >
                                    <span className="day_number">{day}</span>

                                    <div className="day_notes">
                                        {notes.map((note) => (
                                            <p key={note}>{note}</p>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div id="upload-floor">
                    <form className="upload-form">
                        <label htmlFor="fileUpload" className="upload-title">
                            Upload file
                        </label>

                        <div className="upload-box">
                            <input type="file" id="fileUpload" />
                        </div>
                    </form>

                    <div className="charts-dashboard">
                        <section className="chart-card equity-card">
                            <h2>Equity</h2>
                            <p>Equity curve by traded market</p>

                            <div className="chart-box">
                                <ResponsiveContainer width="100%" height={280}>
                                    <LineChart data={equityData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="trade" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="AUS200" stroke="#2563eb" strokeWidth={2} />
                                        <Line type="monotone" dataKey="SPX500" stroke="#16a34a" strokeWidth={2} />
                                        <Line type="monotone" dataKey="NAS100" stroke="#9333ea" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            <p className="chart-subtitle">Total equity curve</p>

                            <div className="chart-box">
                                <ResponsiveContainer width="100%" height={220}>
                                    <LineChart data={equityData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="trade" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="Total" stroke="#111827" strokeWidth={3} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </section>

                        <section className="chart-card">
                            <h2>Pie</h2>
                            <p>Profit, loss, and break-even trades per market</p>

                            <div className="donut-grid">
                                {marketResults.map((markets) => (
                                    <div className="donut-card" key={markets.market}>
                                        <h3>{markets.market}</h3>

                                        <ResponsiveContainer width="100%" height={190}>
                                            <PieChart>
                                                <Pie
                                                    data={markets.data}
                                                    dataKey="value"
                                                    nameKey="name"
                                                    innerRadius={45}
                                                    outerRadius={70}
                                                    paddingAngle={3}
                                                >
                                                    {markets.data.map((_, index) => (
                                                        <Cell key={index} fill={pieColors[index]} />
                                                    ))}
                                                </Pie>
                                                <Tooltip />
                                                <Legend />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="chart-card">
                            <h2>Bar</h2>
                            <p>Which months profited the most</p>

                            <div className="chart-box">
                                <ResponsiveContainer width="100%" height={320}>
                                    <BarChart data={monthlyProfitData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="profit" fill="#6366f1" radius={[8, 8, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;