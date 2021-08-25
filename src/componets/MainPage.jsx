import { useState } from 'react'
import { Container, Row, Carousel, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

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
    const state = useSelector(state => state.premieres)
    const [showInfo, setShowInfo] = useState(false)

    const showInfoToggle = () => {
        setShowInfo(!showInfo)
    }

    const Items = () => (state.map((state) => (
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