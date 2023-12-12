import React from 'react'
import Benefits from '../../components/Benefits'
import styled from 'styled-components'
import { ScaleUp } from '../../utils/style/animations'
import colors from '../../utils/style/variables/colors'
import ProcessSteps from '../../components/ProcessSteps'
import our_project_background from '../../assets/our_project_background2.jpg'
import structures from '../../utils/style/variables/structures'

const BannerWrapper = styled.div`
    margin:0;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(${our_project_background});
    background-repeat: no-repeat;
    background-position: top;
    background-color: ${colors.secondary};
    
    @media (min-width: ${structures.desktop}) {
        background-size: 100%;
        padding-top: 9rem;
    }

    @media (max-width: ${structures.desktop}) {
        background-size: cover;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 10rem;
        padding-bottom: 5rem;
        position: relative;
        overflow-y: hidden;
    }
`

const TitleH1 = styled.h1`
    text-align: center;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: ${structures.desktop}) {
        font-size: 4rem;
    }
    
    @media (max-width: ${structures.desktop}) {
        font-size: 3rem;
        letter-spacing: 1px;
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

const SubTitle = styled.h3`
        margin: 1rem auto 1rem auto;
        text-align: center;
        font-weight: 400;
        position: inherit;

    @media (min-width: ${structures.desktop}) {
        margin: 1rem auto 1rem auto;
        font-size: 2.8rem;
    }
    
    @media (max-width: ${structures.desktop}) {
        font-size: 2.2rem;
    }
`

function OurProject() {
    return (
        <div className='our_project_wrapper'>
            <BannerWrapper>
                <TitleH1>THE WEBSITE PROJECT</TitleH1>
                <SubTitle>Rendre le web <HighlightEffect>accessible</HighlightEffect> à tous</SubTitle>
                <Benefits />
            </BannerWrapper>
            <ProcessSteps />
        </div>
    )
}

export default OurProject