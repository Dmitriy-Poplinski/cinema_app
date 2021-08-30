import {Container, Row} from 'react-bootstrap'
import { connect } from 'react-redux'
import { useEffect } from 'react'

import { RowWrapper } from '../styled/Common.style'
import { Poster } from './Poster'
import { asyncFetchTodayMoviesWidget } from '../redux/ducks/today'

interface TodayProps {
    posters: [],
    asyncFetchTodayMovies(): object 
}

type PosterType = {
    posterImage: string,
    altText: string,
    date: string,
    time: string,
    id: number,
}

const Today: React.FunctionComponent<TodayProps> = ({posters, asyncFetchTodayMovies}) => {
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

type State = {todayReducer: {aug_23: []}}

const mapStateToProps = (state: State) => ({posters: state.todayReducer.aug_23})

const mapDispatchToProps = (dispatch: any) => ({
    asyncFetchTodayMovies: () => dispatch(asyncFetchTodayMoviesWidget())
})

export default connect(mapStateToProps, mapDispatchToProps)(Today)
