import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/variables/colors'

const FooterWrapper = styled.div`
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
`

const StyledHr = styled.hr`
    color: ${colors.primary}
`

function footer() {
    return (<div>
        <StyledHr />
        <FooterWrapper>
            <p>Mentions légales © 2023</p>
            <p>THE WEBSITE PROJECT SARL</p>
        </FooterWrapper>
    </div>
    )
}

export default footer