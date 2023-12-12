import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/variables/colors';
import { benefits } from '../../datas/benefits';
import structures from '../../utils/style/variables/structures';


const BenefitsWrapper = styled.div`
    @media (min-width: ${structures.desktop}) {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap: 2rem;
        margin: 4rem 7rem 0 7rem;
        justify-content: center;
        padding: 1rem 1rem 6rem 1rem;
    }
    
    @media (max-width: ${structures.desktop}) {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(2, 1fr);
        row-gap: 1rem;
        column-gap: 1rem;
        margin-top: 4rem;
        align-self: center;
    }
`

const BenefitWrapper = styled.div`
    @media (min-width: ${structures.desktop}) {
        height: 12rem;
        padding: 2rem;
        text-align: center;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
        background-color: #fff;
        color: #000;
        position: relative;
        display: grid;
        align-content: center;
    
        &:hover {
            border: solid 2px ${colors.secondary};
            transition: all 0.8s ease;
        }

        &:last-child {
            display: none;
        }
    }

    @media (max-width: ${structures.desktop}) {
        width: 8rem;
        padding: 0 1rem;
        text-align: center;
        display: grid;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
        background-color: #fff;
        color: #000;
        border: solid 2px ${colors.primary};
        align-content: center;
        justify-content: center;
    }
`

const StyledH3 = styled.h3`
    font-size: 1.2rem;

    @media (max-width: ${structures.desktop}) {
        margin-bottom: 1rem;
    }
`

const TextWrapper = styled.div`
    @media (min-width: ${structures.desktop}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        color: #fff;
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 2rem;

        &:hover {
            transition: all 0.8s ease;
            background: ${colors.primary};
            opacity: 1;
          }
    }

    @media (max-width: ${structures.desktop}) {
        display: none;
    } 
`

const StyledText = styled.p`
      @media (min-width: ${structures.desktop}) {
        font-size: 1.2rem;
    
          .material-symbols-outlined {
            margin: 1rem;
            font-size: 3rem;
          }
      }

      @media (max-width: ${structures.desktop}) {
        height: fit-content;
    
          .material-symbols-outlined {
            margin: 1rem;
            font-size: 2.5rem;
          } 
      }
`

function Benefits() {
    return (<BenefitsWrapper>
        {benefits.map(({ icon, title, text, id }) => (
            <BenefitWrapper key={id}>
                <StyledText><span className="material-symbols-outlined">{icon}</span></StyledText>
                <StyledH3>{title}</StyledH3>
                <TextWrapper><StyledText>{text} </StyledText></TextWrapper>
            </BenefitWrapper>
        ))}
    </BenefitsWrapper>
    )
}

export default Benefits