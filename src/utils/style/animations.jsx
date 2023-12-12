import { keyframes} from "styled-components"

export const ScaleUp = keyframes`
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }
`

export const SlideInRight = keyframes`
    0% {
        -webkit-transform: translateX(1000px);
        transform: translateX(1000px);
        opacity: 1;
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
`

export const SlideInLeft = keyframes`
    0% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 1;
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
`

// Not left but translate 
export const Slidy = keyframes`
    0% { left: 0%; }
    15% { left: 0%; }
    20% { left: -100%; }
    35% { left: -100%; }
    40% { left: -200%; }
    55% { left: -200%; }
    60% { left: -300%; }
    75% { left: -300%; }
    80% { left: -400%; }
    100% { left: -400%; }
`