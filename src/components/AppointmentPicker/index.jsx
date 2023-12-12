import { useState, useEffect, useContext } from "react";
import AppointmentForm from "../AppointmentForm";
import Time from "../AppointmentTime";
import Calendar from "../AppointmentCalendar";
import styled from "styled-components";
import { TitleH2 } from "../../utils/style/Atoms";
import { SurveyContext } from "../../utils/context";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import structures from "../../utils/style/variables/structures";

const AppointmentPickerWrapper = styled.div`
  background-color: #fff;
  color: #000;
  border-radius: 50px;
  padding: 0 1rem 1rem 1rem;

  @media (min-width: ${structures.desktop}) {
    margin-left: 10rem;
    margin-right: 10rem;
    margin-bottom: 5rem;
  }
  @media (max-width: ${structures.desktop}) {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 3rem;
  }
`
const Form = styled.form`
  max-height: fit-content;
  padding: 0;
  display: flex;
  flex-direction: column;
  p {
    text-align: center;
    font-style: italic;
  }

  @media (min-width: ${structures.desktop}) {
    margin: 2rem;
  }
  @media (max-width: ${structures.desktop}) {
    margin: 1rem;
  }
`

const AppointmentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${structures.desktop}) {
    flex-direction: column;
  }
`

const SubmitButton = styled.button`
width: fit-content;
padding-top: 15px;
padding-bottom: 14px;
padding-left: 40px;
padding-right: 40px;
border-radius: 10px;
background-color: #27959f;
color: #fff;
font-weight: 600;
border: #fff;
margin: 1rem auto 0.5rem auto;
font-size: 1.5rem;
cursor: pointer;
`

function AppointmentPicker() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [appointmentData, setAppointmentData] = useState([]);
  const { replies } = useContext(SurveyContext);

  //Register Appointment
  const [formDatas, setFormDatas] = useState({
    organisation: '',
    name: '',
    firstname: '',
    email: '',
    phone: '',
    url: '',
    date: '',
    time: '',
    repliesFirstQuestion: replies.filter((element => element.question === 1)).map((element) => element.reply).join(", "),
    repliesSecondQuestion: replies.filter((element => element.question === 2)).map((element) => element.reply).join(", "),
    repliesFourthQuestion: replies.filter((element => element.question === 4)).map((element) => element.reply).join(", "),
    repliesFifthQuestion: replies.filter((element => element.question === 5)).map((element) => element.reply).join(", ")
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:8081/appointment', formDatas)
      .then(res => {
        navigate('/');
        console.log(res)
      })
      .catch(err => console.log(err));
  }

  // Load appointment data
  useEffect(() => {
    fetch('http://localhost:8081/appointment')
      .then(res => res.json())
      .then(data => { setAppointmentData(data); })
      .catch((err => console.log(err)));
  }, [])

  return <AppointmentPickerWrapper>
    <Form onSubmit={handleSubmit} action="">
      <TitleH2>Prenez rendez-vous dès maintenant !</TitleH2>
      <AppointmentWrapper>
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          appointmentData={appointmentData}
          setAppointmentData={setAppointmentData} />
        <Time setSelectedTime={setSelectedTime} selectedTime={selectedTime} selectedDate={selectedDate} appointmentData={appointmentData} />
        <AppointmentForm selectedDate={selectedDate} selectedTime={selectedTime} formDatas={formDatas} setFormDatas={setFormDatas} />
      </AppointmentWrapper>
      <SubmitButton type="submit" className="btn-submit">Prendre rendez-vous</SubmitButton>
      <p>Nous ne revendons pas vos données. En prenant rendez-vous, vous acceptez que nous les stockions.</p>
    </Form>
  </AppointmentPickerWrapper>
}

export default AppointmentPicker