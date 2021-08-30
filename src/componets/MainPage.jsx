import { useState, useEffect } from 'react'

import {  Row, Carousel } from 'react-bootstrap'
import { connect } from 'react-redux'


import { Slider } from './Slider';
import {
    MainPageTitleWrapper, 
    InnerContainerStyle,
} from './../styled/MainPage.style'

import { asyncFetchPremieresWidget } from '../redux/ducks/premieres'


const MainPage = (props) => {
    const [showInfo, setShowInfo] = useState(false)

    useEffect(() => {
        props.asyncFetchPremieres()
    })

    const showInfoToggle = () => {
        setShowInfo(!showInfo)
    }

    const Items = () => (props.premieres.map((state) => (
            <Carousel.Item>
                <Slider
                    showInfo={showInfo} 
                    posterImage = {state.posterImage}
                    altText = {state.altText}
                    title = {state.title}
                    text = {state.text}
                    showInfoToggle = {showInfoToggle}
                    key={state.id}
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

const mapStateToProps = (state) => {
    return {
    premieres: state.premiereReducer.premieres,
}}

const mapDispatchToProps = (dispatch) => ({
    asyncFetchPremieres: () => dispatch(asyncFetchPremieresWidget())
})
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
