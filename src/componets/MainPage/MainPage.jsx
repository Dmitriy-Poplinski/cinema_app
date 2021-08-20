import { Container, Row, Carousel, Button } from "react-bootstrap"
import styled from 'styled-components'
import { PremierePoster } from "../PremierePoster/PremierePoster"
import BlackWidowPoster from './../../assets/images/Black_widow.jpg'
import {useState} from 'react'
import * as _ from 'lodash'
import { useSelector } from 'react-redux';

const TitleWrapper = styled.div`
margin-top: 80px;
text-align: center;
font-size: 40px
`

const TextWrapper = styled.span`
@media (max-width: 700px) {
    font-size: 16px;
}
`

const containerStyle={
    marginTop: '50px',
}

const styleImg = {
    height: '900px',
    margin: '0 auto'
}

const styleTitle = {
    width: '60%',
    padding: '20px',
    fontSize: '40px'
}

const styleParag = {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '60%',
    padding: '20px',
    fontSize: '30px',
    backgroundColor: '#ccc',
    marginTop: '20px'
}

export function MainPage () {
    const state = useSelector(state => state.premieres)

    return (
        <Container style={containerStyle}>
            <Row>
               <TitleWrapper>Прем'єри</TitleWrapper> 
            </Row>
            <Row>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            style={styleImg}
                            className="d-block w-70"
                            src={BlackWidowPoster}
                            alt={'No'}
                        />
                        <Carousel.Caption>
                            <Button variant="info" style={styleTitle}><TextWrapper>Детальніше</TextWrapper></Button>
                            <p style={styleParag}><TextWrapper>Прем'єра Чорна вдова</TextWrapper></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            style={styleImg}
                            className="d-block w-70"
                            src={BlackWidowPoster}
                            alt={'No'}
                        />
                        <Carousel.Caption>
                            <Button variant="info" style={styleTitle}><TextWrapper>Детальніше</TextWrapper></Button>
                            <p style={styleParag}><TextWrapper>Прем'єра Чорна вдова</TextWrapper></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            style={styleImg}
                            className="d-block w-70"
                            src={BlackWidowPoster}
                            alt={'No'}
                        />
                        <Carousel.Caption>
                            <Button variant="info" style={styleTitle}><TextWrapper>Детальніше</TextWrapper></Button>
                            <p style={styleParag}><TextWrapper>Прем'єра Чорна вдова</TextWrapper></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    )
}