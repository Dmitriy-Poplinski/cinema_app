import { Container, Row, Carousel, Button } from "react-bootstrap"
import styled from 'styled-components'
import { PremierePoster } from "../PremierePoster/PremierePoster"
import BlackWidowPoster from './../../assets/images/Black_widow.jpg'

const TitleWrapper = styled.div`
margin-top: 40px;
text-align: center;
font-size: 40px
`

export function MainPage () {
    return (
        <Container>
            <Row>
               <TitleWrapper>Премьеры</TitleWrapper> 
            </Row>
            <Row>
                <Carousel>
                    <PremierePoster />
                    <PremierePoster />
                    <PremierePoster />
                </Carousel>
            </Row>
        </Container>
    )
}