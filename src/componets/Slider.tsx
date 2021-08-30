import { Container, Carousel, Button } from 'react-bootstrap'

import {
    MainPageTextWrapper, 
    MainPageImg,
    MainPageParagraph,
    MainPageButtonWrapper,
    MainPageDetailsWrapper,
} from '../styled/Slider.style'

interface SliderProps {
    showInfoToggle(): void,
    posterImage: string,
    altText: string,
    title: string,
    text: string,
    showInfo: boolean,
}

export const Slider: React.FunctionComponent<SliderProps> = ({showInfoToggle, posterImage, altText, title, text, showInfo}) => (
    <>
        {showInfo ?
            <>
                <MainPageImg
                    className="d-block w-70"
                    src={posterImage}
                    alt={altText}
                />
                <Carousel.Caption>
                    <MainPageButtonWrapper>
                        <Button 
                            onClick={showInfoToggle} 
                            variant="info"
                        ><MainPageTextWrapper>Детальніше</MainPageTextWrapper></Button>    
                    </MainPageButtonWrapper>
                    <MainPageParagraph>
                        <MainPageTextWrapper>{title}</MainPageTextWrapper>
                    </MainPageParagraph>
                </Carousel.Caption>
            </>
        :
            <Container>
                <MainPageDetailsWrapper>
                    <p>
                        {text}
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
    </>
)