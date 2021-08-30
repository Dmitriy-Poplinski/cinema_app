import { useState, useEffect } from 'react'

import {  Row, Carousel } from 'react-bootstrap'
import { connect } from 'react-redux'

import { Slider } from './Slider';
import {
    MainPageTitleWrapper, 
    InnerContainerStyle,
} from '../styled/MainPage.style'

import { asyncFetchPremieresWidget } from '../redux/ducks/premieres'

interface MainPageProps {
    premieres: [],
    asyncFetchPremieres(): object,
}

type Premiere = {
    posterImage: string,
    altText: string,
    title: string,
    text: string,
    id: number,
}

const MainPage: React.FunctionComponent<MainPageProps> = ({premieres, asyncFetchPremieres, }) => {
    const [showInfo, setShowInfo] = useState(false)

    useEffect(() => {
        asyncFetchPremieres()
    })

    const showInfoToggle = () => {
        setShowInfo(!showInfo)
    }

    const Items = () => (premieres.map((premiere: Premiere) => (
            <Carousel.Item>
                <Slider
                    showInfo={showInfo} 
                    posterImage = {premiere.posterImage}
                    altText = {premiere.altText}
                    title = {premiere.title}
                    text = {premiere.text}
                    showInfoToggle = {showInfoToggle}
                    key={premiere.id}
                    />
                </Carousel.Item>
            )
        )
    )

    return (
        <InnerContainerStyle>
            {showInfo && <Row><MainPageTitleWrapper>Прем'єри</MainPageTitleWrapper></Row>}
            <Row>
                 <Carousel>
                    {Items()}
                </Carousel> 
            </Row>
        </InnerContainerStyle>
    )
}

type State = {premiereReducer: {premieres: []}}

const mapStateToProps = (state: State) => (
    {premieres: state.premiereReducer.premieres}
)

type DispatchType = (args: ArticleAction) => ArticleAction

const mapDispatchToProps = (dispatch: DispatchType) => ({
    asyncFetchPremieres: () => dispatch(asyncFetchPremieresWidget())
})
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
