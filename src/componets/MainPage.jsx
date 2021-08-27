import { useState, useEffect } from 'react'
import { Container, Row, Carousel, Button } from 'react-bootstrap'

import {

    MainPageTitleWrapper, 
    MainPageTextWrapper, 
    InnerContainerStyle,
    MainPageImg,
    MainPageParagraph,
    MainPageButtonWrapper,
    MainPageDetailsWrapper,
} from './../styled/MainPage.style'

import { axiosAPI } from './../api';

export const MainPage = () => {
    const [showInfo, setShowInfo] = useState(true)
    const [premieres, setPremieres] = useState([])

    useEffect(() => {
        axiosAPI.fetchPremieres(setPremieres)
    }, [])

    const showInfoToggle = () => {
        setShowInfo(!showInfo)
    }

    const Items = () => (premieres.map((state) => (
                <Carousel.Item key={state.id}>
                    {showInfo ?
                        <>
                            <MainPageImg
                                className="d-block w-70"
                                src={state.posterImage}
                                alt={state.altText}
                            />
                            <Carousel.Caption>
                                <MainPageButtonWrapper>
                                    <Button 
                                        onClick={showInfoToggle} 
                                        variant="info"
                                    ><MainPageTextWrapper>Детальніше</MainPageTextWrapper></Button>    
                                </MainPageButtonWrapper>
                                <MainPageParagraph>
                                    <MainPageTextWrapper>{state.title}</MainPageTextWrapper>
                                </MainPageParagraph>
                            </Carousel.Caption>
                        </>
                    :
                        <Container>
                            <MainPageDetailsWrapper>
                                <p>
                                    {state.text}
                                </p>
                            <MainPageButtonWrapper>
                                <Button 
                                    onClick={showInfoToggle} 
                                    variant="info"
                                ><MainPageTextWrapper>Назад</MainPageTextWrapper></Button> 
                            </MainPageButtonWrapper>
                            </MainPageDetailsWrapper>
                        </Container>
                    }
                </Carousel.Item>
            )
        )
    )

    return (
        <Container>
            <InnerContainerStyle>
            {showInfo && <Row><MainPageTitleWrapper>Прем'єри</MainPageTitleWrapper></Row>}
            <Row>
                 <Carousel>
                    {Items()}
                </Carousel> 
            </Row>
            </InnerContainerStyle>
        </Container>
    )
}
