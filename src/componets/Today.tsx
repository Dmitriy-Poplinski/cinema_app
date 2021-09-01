import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useEffect } from 'react'

import { RowWrapper } from '../styled/Common.style'
import { Poster } from './Poster'

import { asyncFetchTodayMoviesWidget } from '../redux/ducks/today'
import { PosterType, TodayState, TodayProps } from '../react-app-env'

const Today: React.FC<TodayProps> = ({ posters, asyncFetchTodayMovies }) => {
    useEffect(() => {
        asyncFetchTodayMovies()
    })

    const Items = () => (posters.map((poster: PosterType) => (
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

const mapStateToProps = (state: TodayState) => ({posters: state.todayReducer.aug_23})

const mapDispatchToProps = (dispatch: any) => ({
    asyncFetchTodayMovies: () => dispatch(asyncFetchTodayMoviesWidget())
})

export default connect(mapStateToProps, mapDispatchToProps)(Today)
