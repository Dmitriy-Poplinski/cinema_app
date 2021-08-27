import {Container, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as axios from 'axios'

import { Poster } from './Poster'
import { RowWrapper } from '../styled/Common.style'
import { asyncFetchTommorowMoviesAC } from '../redux/types'

const Tommorow = () => {
    const [posters, setPosters] = useState([])

    useEffect(() => {
        let data = []
        axios.get('https://demo3586434.mockable.io/date/aug_24')
        .then((res) => {
            data = res.data.aug_24
            setPosters(data)
        })
    }, [])

    const Items = () => (posters.map((poster) => (
        <Poster poster={poster} key={poster.id}/>
    )))

    return (
        <Container>
            <RowWrapper>
                <Row>
                    {Items()}
                </Row>
            </RowWrapper>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    posters: state.aug_24
})

const mapDispatchToProps = (dispatch) => ({
    asyncFetchTommorowMovies: () => dispatch(asyncFetchTommorowMoviesAC())
})

export default connect(mapStateToProps, mapDispatchToProps)(Tommorow)
