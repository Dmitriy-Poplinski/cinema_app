import {Container, Row} from 'react-bootstrap'
import { connect } from 'react-redux'
import { useEffect } from 'react'

import { RowWrapper } from '../styled/Common.style.jsx'
import { Poster } from './Poster'
import { asyncFetchTodayMoviesAC } from '../redux/types.js'

const Today = ({posters, asyncFetchTodayMovies}) => {
    useEffect(() => {
        asyncFetchTodayMovies()
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

const mapStateToProps = (state) => ({posters: state.aug_23})

const mapDispatchToProps = (dispatch) => ({
    asyncFetchTodayMovies: () => dispatch(asyncFetchTodayMoviesAC())
})

export default connect(mapStateToProps, mapDispatchToProps)(Today)
