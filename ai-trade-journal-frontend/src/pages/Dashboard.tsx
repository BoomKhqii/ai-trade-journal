import { useState } from 'react';
import './css/Dashboard.css';

function Dashboard() {
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

    const colors = [
        '#16a085',
        '#1abc9c',
        '#c0392b',
        '#27ae60',
        '#FF6860',
        '#f39c12',
        '#f1c40f',
        '#e67e22',
        '#2ecc71',
        '#e74c3c',
        '#d35400',
        '#2c3e50',
    ];

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

    const monthColor = colors[month];

    return (
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
    );
}

export default Dashboard;