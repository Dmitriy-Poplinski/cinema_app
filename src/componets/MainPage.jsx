import { Container, Row, Carousel, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {
    MainPageTitleWrapper, 
    MainPageTextWrapper, 
    InnerContainerStyle,
    MainPageImg,
    MainPageParagraph,
    MainPageButtonWrapper
} from './../styled/MainPage.style.jsx'

export const MainPage = () => {
    const state = useSelector(state => state.premieres)

    const Items = () => (state.map((state) => (
                <Carousel.Item interval={state.interval}>
                    <MainPageImg
                        className="d-block w-70"
                        src={state.posterImage}
                        alt={state.altText}
                        />
                    <Carousel.Caption>
                        <MainPageButtonWrapper>
                            <Button variant="info"><MainPageTextWrapper>Детальніше</MainPageTextWrapper></Button>    
                        </MainPageButtonWrapper>
                        <MainPageParagraph><MainPageTextWrapper>{state.text}</MainPageTextWrapper></MainPageParagraph>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        )
    )

    return (
        <Container>
            <InnerContainerStyle>
            <Row>
               <MainPageTitleWrapper>Прем'єри</MainPageTitleWrapper> 
            </Row>
            <Row>
                
                 <Carousel>
                    {Items()}
                </Carousel> 
            </Row>
            </InnerContainerStyle>
        </Container>
    )
}