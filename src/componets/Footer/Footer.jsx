import styled from 'styled-components'

const FooterWrapper = styled.div`
height: 100px;
background-color: #2d3540;
color: #fff;
font-size: 28px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Copy = styled.span`
margin-left: 20px;
`

export function Footer () {
    return (
        <FooterWrapper>
            <Copy>&copy;Cinema</Copy>
        </FooterWrapper>
    )
}