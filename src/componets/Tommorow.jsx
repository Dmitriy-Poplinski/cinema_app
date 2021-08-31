import { Container, Row } from 'react-bootstrap'
import { useEffect } from 'react'
import { connect } from 'react-redux'

import { Poster } from './Poster'
import { RowWrapper } from '../styled/Common.style'
import { asyncFetchTommorowMoviesAC } from '../redux/types'

const Tommorow = ({ posters, asyncFetchTommorowMovies }) => {
    useEffect(() => {
        asyncFetchTommorowMovies()
    })

    const Items = () => (posters.map((poster) => (
        <Poster 
            posterImage={poster.posterImage} 
            altText={poster.altText} 
            date={poster.date} 
            time={poster.time} 
            key={poster.id}
        />
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
