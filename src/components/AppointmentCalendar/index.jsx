import { useState, useEffect } from "react";
import { days, months } from "../../datas/calendar";
import styled from "styled-components";
import structures from "../../utils/style/variables/structures";

const CalendarWrapper = styled.div `
    background: #fff;
    max-width: 450px;
    border-radius: 10px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
    height: fit-content;

    @media (min-width: ${structures.desktop}) {
        margin: 2rem;
    }
    
`

const CalendarHeader = styled.div `
    display: flex;
    align-items: center;
    padding: 25px 30px 10px;
    justify-content: space-between;

    p {
        font-size: 1.5rem;
        margin: auto
    }

    .material-symbols-outlined {
        cursor: pointer;
    }
`

const CalendarBody = styled.div `
    padding: 20px;
    ul {
        list-style: none;
        flex-wrap: wrap;
        display: flex;
        text-align: center;
    }
    li {
        width: calc(100% / 7);
        font-size: 1.07rem;
        color: #414141;
    }
`

const CalendarWeekDays = styled.ul`
    cursor: default;
    font-weight: 500;
`

const CalendarDatesWrapper = styled.ul`
    margin-bottom: 20px;
`

const CalendarDates = styled.li`
    margin-top: 30px;
    position: relative;
    z-index: 1;
    cursor: pointer;

    &.not_available {
        cursor: not-allowed;
        color: #aaa;
    }

    &.inactive {
        color: #aaa;
    }

    &.active_date {
        color: #fff;
    }

    &::before {
        position: absolute;
        content: "";
        z-index: -1;
        top: 50%;
        left: 50%;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }

    &.active_date::before {
        background: #27959f;
    }

    &:not(.active_date):hover::before {
        background: #e4e1e1;
    }

    &:not(.active_date).not_available:hover::before {
        background: #fff;
    }
`

function AppointmentCalendar({ selectedDate, setSelectedDate, appointmentData, setAppointmentData }) {
    const [date, setDate] = useState(new Date());
    let month = date.getMonth();
    let year = date.getFullYear();

    // variable to store the generated calendar HTML
    const [lit, setLit] = useState([]);

    function generateCalendar() {
        // get the first day of the month ; -1 is to begin the week with Monday instead of sunday
        let dayone = new Date(year, month, 1).getDay() - 1;
        dayone = dayone < 0 ? 6 : dayone; // Adjusting for Sunday (if dayone is -1, set it to 6)

        // get the last date of the month
        let lastdate = new Date(year, month + 1, 0).getDate();

        // get the day of the last date of the month ; -1 is to begin the week with Monday instead of sunday
        let dayend = new Date(year, month, lastdate).getDay() - 1;
        dayend = dayend < 0 ? 6 : dayend; // Adjusting for Sunday (if dayend is -1, set it to 6)

        // get the last date of the previous month
        let monthlastdate = new Date(year, month, 0).getDate();

        const newLit = [];

        // loop to add the last dates of the previous month
        for (let i = dayone; i > 0; i--) {
            let previousMonth = month < 10 ? "0" + month : month;
            let day = monthlastdate - i + 1 < 10 ? "0" + monthlastdate - i + 1 : monthlastdate - i + 1;
            newLit.push({ class: "inactive previous_month", day: day, month: previousMonth });
        }
        // loop to add the dates of the current month
        for (let i = 1; i <= lastdate; i++) {
            // check if the current date is today
            let isToday = "";
            let beforeToday = "";
            if (i === date.getDate() &&
                month === new Date().getMonth() &&
                year === new Date().getFullYear()) {
                isToday = "today";
            };

            let day = i < 10 ? "0" + i : i;
            let currentMonth = month + 1;
            currentMonth = currentMonth < 10 ? "0" + currentMonth : currentMonth;
            newLit.push({ class: isToday, day: day, month: currentMonth });
        }
        // loop to add the first dates of the next month
        for (let i = dayend; i < 6; i++) {
            let nextMonth = month + 2 > 12 ? 1 : month + 2;
            nextMonth = nextMonth < 10 ? "0" + nextMonth : nextMonth;
            let day = i - dayend + 1;
            day = day < 10 ? ("0" + day) : day;
            newLit.push({ class: "inactive next_month", day: day, month: nextMonth });
        }
        //month+2>12 ? newMonth = 1
        return newLit;
    };

    // handle prev and next buttons
    function changeMonth(string) {
        const newDate = new Date(date);
        if (string === "prev") {
            newDate.setMonth(month - 1);
        } else {
            newDate.setMonth(month + 1);
        };
        setDate(newDate);
    }

    //Toggle the active_date class and set selectedDate
    function toggleSelectedDateAndCalendar(event) {
        if (!event.target.classList.contains("not_available")) {
            setSelectedDate(event.target.id);

            if (event.target.classList.contains('next_month')) {
                const newDate = new Date(date);
                newDate.setMonth(month + 1)
                setDate(newDate)
            }

            if (event.target.classList.contains('previous_month')) {
                const newDate = new Date(date);
                newDate.setMonth(month - 1)
                setDate(newDate)
            }
        }
    }

    const appointmentDates = appointmentData.map((appointment) => appointment.date.slice(0, 10))

    useEffect(() => {
        const calendarData = generateCalendar();
        setLit(calendarData);
    }, [date]);

    return <CalendarWrapper>
        <CalendarHeader>
            <div onClick={() => changeMonth("prev")}><span className="material-symbols-outlined">chevron_left</span></div>
            <p>{months[month + 1]} {year}</p>
            <div onClick={() => changeMonth("next")}><span className="material-symbols-outlined">chevron_right</span></div>
        </CalendarHeader>
        <CalendarBody>
            <CalendarWeekDays>
                {days.map(day => (
                    <li key={days.indexOf(day)} className="day">{day.substring(0, 3)}</li>
                ))}
            </CalendarWeekDays>
            <CalendarDatesWrapper>
                {lit.map((date) => (
                    <CalendarDates key={lit.indexOf(date)}
                        id={year + "-" + date.month + "-" + date.day}
                        className={`${date.class}
                    ${// Manage the active_date selection
                            year + "-" + date.month + "-" + date.day === selectedDate ? " active_date" : ""}
                    ${// Put the not_available class on days that already have two appointments
                            (appointmentDates
                                .filter(
                                    (appointmentDate) => appointmentDate === year + "-" + date.month + "-" + date.day
                                )
                                .length >= 2
                                || new Date(year + "-" + date.month + "-" + date.day).getDay() === 0
                                || new Date(year + "-" + date.month + "-" + date.day).getDay() === 6
                                || (date.month < new Date().getMonth()+1 && year <= new Date().getFullYear())
                                 || (date.month === new Date().getMonth()+1
                                     && date.day <= new Date().getDate()))
                            ? " not_available" : ""
                            }`}
                        onClick={(event) => {
                            toggleSelectedDateAndCalendar(event);
                        }}
                    >
                        {date.day}
                    </CalendarDates>
                ))}
            </CalendarDatesWrapper>
        </CalendarBody>
    </CalendarWrapper>
}

export default AppointmentCalendar