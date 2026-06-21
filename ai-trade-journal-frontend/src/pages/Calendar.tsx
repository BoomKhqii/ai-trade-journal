import { } from 'react'
import './css/Calendar.css'
import './js/Calendar.js'
function Calendar() {
    return (
        <>
            <head>
                <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'></link>
            </head>
            <body>
                <div id="calendar">
                    <div id="calendar_header"> <i className="icon-chevron-left"></i>          <h1></h1><i className="icon-chevron-right"></i>         </div>
                    <div id="calendar_weekdays"></div>
                    <div id="calendar_content"></div>
                </div>
            </body>
        </>
    )
}

export default Calendar;
