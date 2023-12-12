import { workingHours } from "../../datas/calendar";
import styled from "styled-components";
import structures from "../../utils/style/variables/structures";

const TimeContainer = styled.div `
    @media (min-width: ${structures.desktop}) {
        display: grid;
        align-content: center;
    }   
    @media (max-width: ${structures.desktop}) {
        margin-top: 2rem;
    }
`

const TimesListWrapper = styled.ul `
    display: grid;

    @media (min-width: ${structures.desktop}) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: ${structures.desktop}) {
        grid-template-columns: repeat(4, 1fr);
    }   
`

const TimeButton = styled.li `
    display: block;
    text-align: center;
    padding: 5px;
    margin: 5px;
    font-size: 1.1rem;
    border-radius: 7px;
    cursor: pointer;
    border: ${(prop) => (prop.$isNotAvailable ? `#aaa solid 1px; color: #aaa; cursor: no-drop;` : `#000 solid 1px;`)}
    ${(prop) => (prop.$active ? 
        `background-color: #28949E;
        color: #fff;
        border: #fff solid 1px` 
        : `background-color: #fff;`
        )};
    &:hover {
        background-color: #e4e1e1;
        border: #fff;
    }
`

function AppointmentTime({ setSelectedTime, selectedDate, appointmentData, selectedTime }) {

    // Convert hh:mm in minutes
    function convertToMinutes(time) {
        const [hours, minutes, secondes] = time.split(':').map(Number);
        return hours * 60 + minutes + (secondes/60);
    };

    // Verify if hour is between start and end (in minute)
    function isHourInRange(hour, start, end) {
        const convertedHour = convertToMinutes(hour);
        return convertedHour >= start && convertedHour <= end;
    };

    function isNotAvailableTime(hour) {
        if (appointmentData.some(
            data =>
                data.date.slice(0, 10) === selectedDate &&
                (isHourInRange(hour, convertToMinutes(data.time), convertToMinutes(data.time) + 120) || 
                isHourInRange(hour, convertToMinutes(data.time)-90, convertToMinutes(data.time)) 
                    )
        )) {
            return true
        } else {
            return false
        }
    }

    return <TimeContainer>
        <TimesListWrapper>
            {(selectedDate !== "") &&
                (workingHours.map(hour => (
                    <TimeButton 
                        key={workingHours.indexOf(hour)}
                        id={"hour_" + hour}
                        onClick={() => { (selectedDate !== ""&& !isNotAvailableTime(hour)) && setSelectedTime(hour) }}
                        $isNotAvailable={isNotAvailableTime(hour)}
                        $active={hour===selectedTime}
                    >
                        {hour.replace(":","h").slice(0,5)}
                    </TimeButton>)
                ))}
        </TimesListWrapper>
    </TimeContainer>
}

export default AppointmentTime


