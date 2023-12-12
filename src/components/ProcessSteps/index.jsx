import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/variables/colors';
import { processSteps } from '../../datas/processSteps';
import Step from '../StepOfProcess';
import structures from '../../utils/style/variables/structures';
import { ScaleUp } from '../../utils/style/animations';
import ProcessStepsBackground from '../ProcessStepsBackground';


const ProcessStepsWrapper = styled.div`

    @media (min-width: ${structures.desktop}) {
        background-color: #fff;
        padding: 2rem;
        color: #fff;
    }

    @media (max-width: ${structures.desktop}) {
        padding: 0rem 1rem;
        overflow: hidden;
        position: relative;
        display: grid;
        justify-items: center;
    }
`

const Title = styled.h2`
    @media (min-width: ${structures.desktop}) {
        font-size: 2rem;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        color: ${colors.secondary};
        padding-bottom: 2rem;
        padding-top: 2rem;
    }

    @media (max-width: ${structures.desktop}) {
        padding-bottom: 1rem;
        padding-top: 4rem;
        margin: 1rem auto 1rem auto;
        text-align: center;
        font-weight: 400;
        font-size: 2.2rem;
        color: #000;
        }
    }
`

const HighlightEffect = styled.span`
    position: relative;
    z-index: 2;

    &::after {
      content: "";
      position: absolute;
      display: inline-block;
      height: 60px;
      background: linear-gradient(to top, rgba(39, 149, 159, 0.95) 38%, transparent 40%);
      z-index: -1;
      bottom: 0;
      left: 0;
      animation: ${ScaleUp} 1s ease-in-out forwards;
    }
`

const StepsWrapper = styled.ul`
    list-style-type: none;

    @media (min-width: ${structures.desktop}) {
        display: grid;
        grid-template-rows: repeat(5, 1fr);
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 8rem;
        justify-items: center;
        margin-left: 10.5rem;
        margin-right: 10.5rem;
        margin-top: 5rem;
        margin-bottom: 5rem;
        padding: 0 0 0 0;
    }
    
    @media (max-width: ${structures.desktop}) {
        display: grid;
        justify-items: center;
    }
`

const BackgroundWrapper = styled.figure`
    @media (min-width: ${structures.desktop}) {
        display: none;        
    }

    @media (max-width: ${structures.desktop}) {
        margin: 1rem auto;
        width: fit-content;
        display: grid;
        height: 25rem;

        .process_steps_background {
            margin: auto;
        }
    }
`


function ProcessSteps() {

    return (
        <ProcessStepsWrapper>
            <Title>Cinq étapes pour vous,<br></br>un <HighlightEffect>bon de géant</HighlightEffect> pour votre entreprise</Title>
            <BackgroundWrapper className='process_steps_background_wrapper'><ProcessStepsBackground className='process_steps_background' /></BackgroundWrapper>
            <div id="bar"></div>
            <StepsWrapper>
                {processSteps.map(({ number, icon, text, picture }) => (
                    <Step key={number} number={number} icon={icon} text={text} picture={picture} />
                ))}
            </StepsWrapper>
        </ProcessStepsWrapper>
    )
}

export default ProcessSteps