import { Container, Row, Carousel, Button } from "react-bootstrap"
import styled from 'styled-components'
import { PremierePoster } from "../PremierePoster/PremierePoster"
import BlackWidowPoster from './../../assets/images/Black_widow.jpg'
import {useState} from 'react'
import * as _ from 'lodash'

const TitleWrapper = styled.div`
margin-top: 80px;
text-align: center;
font-size: 40px
`

const styleImg = {
    width: '90%',
    height: '900px'
}

const styleTitle = {
    width: '100%',
    padding: '20px',
    fontSize: '40px'
}

const styleParag = {
    width: '100%',
    padding: '20px',
    fontSize: '30px',
    backgroundColor: '#ccc',
    marginTop: '20px'
}

export function MainPage () {
    const [premieres, setPremieres] = useState([
        {
            posterImage: BlackWidowPoster,
            altText: 'BlackWidow',
            interval: 1000,
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        {
            posterImage: BlackWidowPoster,
            altText: 'BlackWidow',
            interval: 500,
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        {
            posterImage: BlackWidowPoster,
            altText: 'BlackWidow',
            interval: 200,
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        {
            posterImage: BlackWidowPoster,
            altText: 'BlackWidow',
            interval: 300,
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        {
            posterImage: BlackWidowPoster,
            altText: 'BlackWidow',
            interval: 400,
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
    ])

    return (
        <Container>
            <Row>
               <TitleWrapper>Премьеры</TitleWrapper> 
            </Row>
            <Row>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            style={styleImg}
                            className="d-block w-100"
                            src={BlackWidowPoster}
                            alt={'No'}
                        />
                        <Carousel.Caption>
                            <Button variant="info" style={styleTitle}>Детальніше</Button>
                            <p style={styleParag}>Прем'єра Чорна вдова</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            style={styleImg}
                            className="d-block w-100"
                            src={BlackWidowPoster}
                            alt={'No'}
                        />
                        <Carousel.Caption>
                            <Button variant="info" style={styleTitle}>Детальніше</Button>
                            <p style={styleParag}>Прем'єра Чорна вдова</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            style={styleImg}
                            className="d-block w-100"
                            src={BlackWidowPoster}
                            alt={'No'}
                        />
                        <Carousel.Caption>
                            <Button variant="info" style={styleTitle}>Детальніше</Button>
                            <p style={styleParag}>Прем'єра Чорна вдова</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    )
}