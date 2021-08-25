import { Container, Row, Carousel, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import {
    MainPageTitleWrapper, 
    MainPageTextWrapper, 
    InnerContainerStyle,
    MainPageImg,
    MainPageParagraph,
    MainPageButtonWrapper
} from './../styled/MainPage.style.jsx'

const MainPage = ({premieres}) => {
    const Items = () => (premieres.map((state) => (
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

const mapStateToProps = state => {
    return {
        premieres: state.premieres
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)