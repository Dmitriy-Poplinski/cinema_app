import { useState, useEffect } from 'react'
import { Container, Row, Carousel, Button } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux'

import {
    MainPageTitleWrapper, 
    MainPageTextWrapper, 
    InnerContainerStyle,
    MainPageImg,
    MainPageParagraph,
    MainPageButtonWrapper,
    MainPageDetailsWrapper,
} from './../styled/MainPage.style'

import { asyncFetchPremieresAC } from '../redux/types'


const MainPage = ({premieres, asyncFetchPremieres}) => {
    const [showInfo, setShowInfo] = useState(false)

    useEffect(() => {
        asyncFetchPremieres()
    }, [])

    const showInfoToggle = () => {
        setShowInfo(!showInfo)
    }
    
    const Items = () => (premieres.map((premiere) => {
        return (
                <Carousel.Item>
                    {showInfo ?
                        <Container>
                            <MainPageDetailsWrapper>
                                    <p>
                                        {premiere.text}
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
                                src={premiere.posterImage}
                                alt={premiere.altText}
                            />
                            <Carousel.Caption>
                                <MainPageButtonWrapper>
                                    <Button onClick={showInfoToggle} variant="info"><MainPageTextWrapper>Детальніше</MainPageTextWrapper></Button>    
                                </MainPageButtonWrapper>
                                <MainPageParagraph><MainPageTextWrapper>{premiere.title}</MainPageTextWrapper></MainPageParagraph>
                            </Carousel.Caption>
                        </>
                    }
                </Carousel.Item>
            )}
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

const mapStateToProps = (state) => ({
    premieres: state.premieres,
})

const mapDispatchToProps = (dispatch) => ({
    asyncFetchPremieres: () => dispatch(asyncFetchPremieresAC())
})
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
