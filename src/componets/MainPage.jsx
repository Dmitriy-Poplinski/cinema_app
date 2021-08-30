import { useState, useEffect } from 'react'

import {  Row, Carousel } from 'react-bootstrap'
import { connect } from 'react-redux'


import { Slider } from './Slider';
import {
    MainPageTitleWrapper, 
    InnerContainerStyle,
} from './../styled/MainPage.style'

import { asyncFetchPremieresAC } from '../redux/types'


const MainPage = ({premieres, asyncFetchPremieres}) => {
    const [showInfo, setShowInfo] = useState(false)

    useEffect(() => {
        asyncFetchPremieres()
    })

    const showInfoToggle = () => {
        setShowInfo(!showInfo)
    }

    const Items = () => (premieres.map((state) => (
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

const mapStateToProps = (state) => ({
    premieres: state.premieres,
})

const mapDispatchToProps = (dispatch) => ({
    asyncFetchPremieres: () => dispatch(asyncFetchPremieresAC())
})
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
