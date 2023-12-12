import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { SurveyContext } from "../../utils/context";
import styled from "styled-components";

const FormWrapper = styled.div`
    margin: 2rem;
    padding: 0;
    max-width: 500px;
    min-width: 200px;
    max-height: fit-content;
`

const InputWrapper = styled.div`
    margin: 0 0 1rem 0;
    display: flex;
    flex-direction: space;
    justify-content: space-around;
    flex-direction: column;

    p {
        font-size: 0.9rem;
        text-align: center;
    }
`

function AppointmentForm({ selectedDate, selectedTime, formDatas, setFormDatas }) {
    const { repliesId, replies } = useContext(SurveyContext);

    function organisationType() {
        if (repliesId.includes('2b')
            || repliesId.includes("2c")
            || repliesId.includes("2d")) {
            return "Société"
        }
        if (repliesId.includes('2e')) {
            return "Nom de votre organisation"
        }
        if (repliesId.includes('2f')) {
            return "Nom de votre institution"
        }
        if (repliesId.includes('2g')) {
            return "Nom de votre cabinet"
        }
    }

    function handleInput(event) {
        setFormDatas(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    useEffect(() => {
        setFormDatas(prev => ({ ...prev, date: selectedDate + "T" + selectedTime, time: selectedTime }))
    }, [selectedDate, selectedTime])

     return <FormWrapper>
        {
            (repliesId.includes("2b") || repliesId.includes("2c") || repliesId.includes("2d") || repliesId.includes("2e") || repliesId.includes("2f") || repliesId.includes("2g")) &&
            <InputWrapper>
                <label htmlFor="organisation" className="form-label">{organisationType()}</label>
                <input type="organisation" id="organisation" name="organisation" onChange={handleInput} />
            </InputWrapper>
        }
        <InputWrapper>
            <label htmlFor="name" className="form-label">Nom</label>
            <input type="text" id="name" name="name" onChange={handleInput} />
        </InputWrapper>

        <InputWrapper>
            <label htmlFor="first-name" className="form-label">Prénom</label>
            <input type="text" id="firstname" name="firstname" onChange={handleInput} />
        </InputWrapper>

        <InputWrapper>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" name="email" onChange={handleInput} />
        </InputWrapper>

        <InputWrapper>
            <label htmlFor="phone" className="form-label">Numéro de téléphone</label>
            <input type="tel" id="phone" name="phone" onChange={handleInput} />
        </InputWrapper>

        {
            repliesId.includes("3a") &&
            <InputWrapper>
                <label htmlFor="url" className="form-label">URL de votre site internet actuel</label>
                <input type="url" id="url" name="url" onChange={handleInput} />
            </InputWrapper>
        }

        <InputWrapper>
            <label htmlFor="date" className="form-label">Date du rendez-vous</label>
            <input type="date" id="date" name="date" value={selectedDate} readOnly />
        </InputWrapper>

        <InputWrapper>
            <label htmlFor="time" className="form-label">Heure du rendez-vous</label>
            <input type="time" id="time" name="time" value={selectedTime} readOnly />
        </InputWrapper>
        
    </FormWrapper>
}

export default AppointmentForm