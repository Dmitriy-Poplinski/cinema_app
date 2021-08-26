import { useState, useEffect } from 'react'
import { Container, Row, Carousel, Button } from 'react-bootstrap'
import * as axios from 'axios'

import {
    MainPageTitleWrapper, 
    MainPageTextWrapper, 
    InnerContainerStyle,
    MainPageImg,
    MainPageParagraph,
    MainPageButtonWrapper,
    MainPageDetailsWrapper,
} from './../styled/MainPage.style'

export const MainPage = () => {
    const [showInfo, setShowInfo] = useState(false)
    const [premieres, setPremieres] = useState([])

    useEffect(() => {
        let data = []
        axios.get('https://demo3586434.mockable.io/premieres')
        .then((res) => {
            data = res.data.premieres
            setPremieres(data)
        })
    })

    const showInfoToggle = () => {
        setShowInfo(!showInfo)
    }

    const Items = () => (premieres.map((state) => (
                <Carousel.Item>
                    {showInfo ?
                        <Container>
                            <MainPageDetailsWrapper>
                                    <p>
                                        {state.text}
                                    </p>
                                <MainPageButtonWrapper>
                                    <Button onClick={showInfoToggle} variant="info"><MainPageTextWrapper>Назад</MainPageTextWrapper></Button> 
                                </MainPageButtonWrapper>
                            </MainPageDetailsWrapper>
                        </Container>
                    :
                        <>
                            <MainPageImg
                                className="d-block w-70"
                                src={state.posterImage}
                                alt={state.altText}
                            />
                            <Carousel.Caption>
                                <MainPageButtonWrapper>
                                    <Button onClick={showInfoToggle} variant="info"><MainPageTextWrapper>Детальніше</MainPageTextWrapper></Button>    
                                </MainPageButtonWrapper>
                                <MainPageParagraph><MainPageTextWrapper>{state.title}</MainPageTextWrapper></MainPageParagraph>
                            </Carousel.Caption>
                        </>
                    }
                </Carousel.Item>
            )
        )
    )

    return (
        <Container>
            <InnerContainerStyle>
            {showInfo ? 
                null
            :
                <Row>
                    <MainPageTitleWrapper>Прем'єри</MainPageTitleWrapper> 
                </Row>
            }
            <Row>
                 <Carousel>
                    {Items()}
                </Carousel> 
            </Row>
            </InnerContainerStyle>
        </Container>
    )
}
