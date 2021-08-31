/// <reference types="react-scripts" />

/* Common */

export type Action = {
    type: string,
    payload: []
}

export type PosterType = {
    posterImage: string,
    altText: string,
    date: string,
    time: string,
    id: number,
}

/* Tommorow */

export type TommorowState = {tommorowReducer: {aug_24: []}}
export interface TommorowProps {
    posters: [],
    asyncFetchTommorowMovies(): object 
}

/* Today */

export type TodayState = {todayReducer: {aug_23: []}}

export interface TodayProps {
    posters: [],
    asyncFetchTodayMovies(): object 
}

/* Slider */

export interface SliderProps {
    showInfoToggle(): void,
    posterImage: string,
    altText: string,
    title: string,
    text: string,
    showInfo: boolean,
}

/* Poster */

export interface PosterProps {
    posterImage: string,
    altText: string,
    date: string,
    time: string
}

/* ModalDate */

export interface ModalDateProps {
    show: boolean,
    handleClose(): void
}

/* MainPage */

export type PremiereState = {premiereReducer: {premieres: []}}

export type Premiere = {
    posterImage: string,
    altText: string,
    title: string,
    text: string,
    id: number,
}

export interface MainPageProps {
    premieres: [],
    asyncFetchPremieres(): object,
}

/* Header */

export interface HeaderProps {
    redirectToMain(): void,
    redirectToDate(): void
}
