import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { styled, css } from 'styled-components'
import colors from '../../utils/style/variables/colors'
import logo from '../../assets/logo.png'
import { ScaleUp } from '../../utils/style/animations'
import structures from '../../utils/style/variables/structures'

const HeaderWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    z-index: 1;
    color: #fff;

    @media (max-width:${structures.desktop}) {
        padding-top: 0.5rem;
    }
`

const StyledLogo = styled.img `
    display: flex;
    height: 4rem;
    width: 3.2rem;
    padding-left: 2rem;
`

const StyledNavLink = styled(Link) `
    color: #fff;
    font-size: 1.2rem;
    position: relative;

    &:last-child {
        margin-left: 1rem;
    }

    &::after {
        ${(props) => props.$active ? css`
            content: "";
            position: absolute;
            bottom: -1px;
            left: 0;
            background-color: #fff;
            width: 100%;
            height: 1px;
            display: block; 
            animation: ${ScaleUp} 1s ease-in-out forwards;` : ``}
    }
`

const StyledNav = styled.nav`
    padding-right: 2rem;
`

const StyledHr = styled.hr `
    color: ${colors.primary}
`

function Header() {
    const location = useLocation();
    return (
        <div>
            <HeaderWrapper>
                <StyledLogo src={logo} />
                <StyledNav>
                    <StyledNavLink to='/' $active={location.pathname==='/'}>
                        Votre Projet
                    </StyledNavLink>
                    <StyledNavLink to='/notre-projet' $active={location.pathname==='/notre-projet'}>
                        Notre projet
                    </StyledNavLink>
                </StyledNav>
            </HeaderWrapper>
            <StyledHr />
        </div>
    )
}

export default Header