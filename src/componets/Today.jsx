import {Container, Row} from 'react-bootstrap'
import { connect } from 'react-redux'
import { useEffect } from 'react'

import { RowWrapper } from '../styled/Common.style'
import { Poster } from './Poster'
import { asyncFetchTodayMoviesAC } from '../redux/types'

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

const mapStateToProps = (state) => ({posters: state.todayReducer.aug_23})

const mapDispatchToProps = (dispatch) => ({
    asyncFetchTodayMovies: () => dispatch(asyncFetchTodayMoviesAC())
})

export default connect(mapStateToProps, mapDispatchToProps)(Today)
