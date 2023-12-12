import React, { useRef, useState, useEffect } from 'react';
import { styled, css } from 'styled-components';
import { SlideInRight, SlideInLeft } from '../../utils/style/animations';
import colors from '../../utils/style/variables/colors';
import structures from '../../utils/style/variables/structures';
import gsap from 'gsap';

const StepWrapper = styled.li`
    @media (min-width: ${structures.desktop}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: ${colors.secondary};
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
        border: solid 2px ${colors.primary};
        padding: 2rem;
        margin-bottom: 2rem;
        position: relative;
        height: 18rem;
        width: 32rem;
        opacity: 0;
    
        ${(props) => props.$isRightStepVisible ? css`
            -webkit-animation: ${SlideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            animation: ${SlideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            animation-duration: 1s;
        ` : ``}
    
        ${(props) => props.$isLeftStepVisible ? css`
            -webkit-animation: ${SlideInLeft} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            animation: ${SlideInLeft} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            animation-duration: 1s;
        ` : ``}
    
        &:nth-child(2) {
            grid-column: 2;
            grid-row: 2;
        }
    
        &:nth-child(3) {
            grid-column: 1;
            grid-row: 3;
        }
    
        &:nth-child(4) {
            grid-column: 2;
            grid-row: 4;
        }
    
        &:nth-child(5) {
            grid-column: 1;
            grid-row: 5;
        }
}

    @media (max-width: ${structures.desktop}) {
        max-width: 20rem;
        padding: 1rem 0 4rem 0;
        opacity: 0;
        position: absolute;
        top: 20rem;
`

const Number = styled.p`
    @media (min-width: ${structures.desktop}) {
        font-size: 3rem;
        max-width: 4rem;
        margin: 0;
        padding-bottom: 2rem;
    }

    @media (max-width: ${structures.desktop}) {
        display: none;
    }
`

const TextIllusWrapper = styled.div`
    @media (max-width: ${structures.desktop}) {
        padding: 2rem 1rem 1rem 1rem;
        margin-top: 3rem;
        max-width: fit-content;
        z-index: 1;
    }
`

const StyledText = styled.p`
    @media (min-width: ${structures.desktop}) {
        padding-left: 2rem;
        padding-bottom: 2rem;
        grid-column: 1;
        font-size: 1.2rem;
        line-height: 2rem;
    }

    @media (max-width: ${structures.desktop}) {
        text-align: center;
        margin: 0 auto 2rem auto;
        font-size: 1.3rem;
        line-height: 2rem;
        padding: 0 2rem;
        z-index: 2;
        font-weight: 500;
    }
`

const StyledImg = styled.img`

    @media (min-width: ${structures.desktop}) {
        display: block;
        position: absolute;
        top: -1.5rem;
        width: 600px;
        height: 400px;
        ${(props) => props.$right ? `right: -104%;` : `left: -104%`}
    }
    
    @media (max-width: ${structures.desktop}) {
        display: none;
    }
`

function Step({ number, icon, text, picture }) {
    const refStep = useRef(null)
    const [isVisible, setIsVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    function handleStepsIntersection(entries) {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setIsVisible(entry.isIntersecting);
        }
    }

    const option = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    }

    useEffect(() => {
        const observer = new IntersectionObserver(handleStepsIntersection, option);
        if (refStep.current) {
            observer.observe(refStep.current);
            return () => {
                if (refStep.current) {
                    observer.unobserve(refStep.current)
                }
            }
        }
    }, [refStep.current])

    useEffect(() => {
        function animatom() {

        const svgBackground = document.getElementById('process_steps_background');        const tl = gsap.timeline();
        
        switch (svgBackground.getAttribute("viewBox")) {
            case ("225 0 150 1499.999933") : 
            // From starting point to first step
            tl.to('.process_steps_background', { attr:{viewBox:"225 120 150 1499.999933"} });
            tl.to('.process_steps_background', { attr:{viewBox:"75 85 150 1499.999933", width:"200"}});
            tl.to('.step_wrapper_1', {opacity:1});
            break

            case ("75 85 150 1499.999933") : 
            // From first step to second step
            tl.to('.step_wrapper_1', {opacity: 0, delay: 1});
            tl.to('.process_steps_background', { attr:{viewBox:"225 120 150 1499.999933", width:"350"}});
            tl.to('.process_steps_background', { attr:{viewBox:"225 442 160 1499.999933"}});
            tl.to('.process_steps_background', { attr:{viewBox:"355 402 160 1499.999933", width:"200"}});
            tl.to('.step_wrapper_2', {opacity:1});
            break

            case("355 402 160 1499.999933") : 
            // From second to third
            tl.to('.step_wrapper_2', {opacity:0, delay:1});
            tl.to('.process_steps_background', { attr:{viewBox:"225 442 160 1499.999933", width:"350"}});
            tl.to('.process_steps_background', { attr:{viewBox:"225 740 160 1499.999933"}});
            tl.to('.process_steps_background', { attr:{viewBox:"75 700 160 1499.999933", width:"200"}});
            tl.to('.step_wrapper_3', {opacity:1});
            break

            case("75 700 160 1499.999933") : 
            // From third to fourth
            tl.to('.step_wrapper_3', {opacity:0, delay:1});
            tl.to('.process_steps_background', { attr:{viewBox:"225 740 160 1499.999933", width:"350"}});
            tl.to('.process_steps_background', { attr:{viewBox:"225 1045 160 1499.999933"}});
            tl.to('.process_steps_background', { attr:{viewBox:"355 1005 160 1499.999933", width:"200"}});
            tl.to('.step_wrapper_4', {opacity:1});
            break

            case("355 1005 160 1499.999933") : 
            // From fourth to last
            tl.to('.step_wrapper_4', {opacity:0, delay:1});
            tl.to('.process_steps_background', { attr:{viewBox:"225 1045 160 1499.999933", width:"350"}});
            tl.to('.process_steps_background', { attr:{viewBox:"225 1350 160 1499.999933"}});
            tl.to('.process_steps_background', { attr:{viewBox:"75 1315 160 1499.999933", width:"200"}});
            tl.to('.step_wrapper_5', {opacity:1});
            break
        }
    }
    animatom();
    },[isScrolled])

    return (
        <StepWrapper onScroll={()=>setIsScrolled(!isScrolled)} className={'step_wrapper_'+number} $isLeftStepVisible={isVisible && number % 2 !== 0} $isRightStepVisible={isVisible && number % 2 === 0} ref={refStep}>
            <Number>{number}</Number>
            <TextIllusWrapper>
                <StyledText>{text}</StyledText>
                <StyledImg $right={number % 2 !== 0} src={picture} />
            </TextIllusWrapper>
        </StepWrapper>
    )
}

export default Step