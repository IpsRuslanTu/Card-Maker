import { AnyAction } from "redux";

const CREATE_DEFAULT_BACKGROUND = "CREATE_DEFAULT_BACKGROUND";
const CHANGE_BACKGROUND = "CHANGE_BACKGROUND";
const CHANGE_WIDTH_CANVAS = "CHANGE_WIDTH_CANVAS";
const CHANGE_HEIGTH_CANVAS = "CHANGE_HEIGTH_CANVAS";
const ADD_IMAGE_BACKGROUND = "ADD_IMAGE_BACKGROUND";

type backgroundReducerType = {
    bgColor: string,
    width: number,
    height: number,
    BGImage: string | null
}

const defaultState: backgroundReducerType = {
    bgColor: '#cec7b4',
    width: 700,
    height: 450,
    BGImage: null
}

export function changeBackground(newColor: string): AnyAction {
    return {
        type: CHANGE_BACKGROUND,
        newColor: newColor
    }
}

export function changeWidthCanvas(newWidth: number): AnyAction {
    return {
        type: CHANGE_WIDTH_CANVAS,
        width: newWidth
    }
}

export function changeHeigthCanvas(newHeight: number): AnyAction {
    return {
        type: CHANGE_HEIGTH_CANVAS,
        height: newHeight
    }
}

export function createDefaultBG(): AnyAction {
    return {
        type: CREATE_DEFAULT_BACKGROUND,
        newColor: '#cec7b4',
        width: 700,
        height: 450
    }
}

export function addImgBG(newSrc :string): AnyAction {
    return {
        type: ADD_IMAGE_BACKGROUND,
        newSrc: newSrc
    }
}

export const backgroundReducer = (state = defaultState, action: AnyAction) :backgroundReducerType => {
    switch (action.type) {
        case CREATE_DEFAULT_BACKGROUND:
            return {...state, bgColor: action.newColor, width: action.width, height: action.height}
        case CHANGE_BACKGROUND:
            return {...state, bgColor: action.newColor}
        case ADD_IMAGE_BACKGROUND:
            return {...state, BGImage: action.newSrc}
        case CHANGE_WIDTH_CANVAS:
            return {...state, width: action.width}
        case CHANGE_HEIGTH_CANVAS:
            return {...state, height: action.height}
        default:
            return state
    }
}