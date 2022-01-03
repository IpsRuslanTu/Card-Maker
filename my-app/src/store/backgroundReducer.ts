import { AnyAction } from "redux";

const CHANGE_BACKGROUND = "CHANGE_BACKGROUND";
const CHANGE_WIDTH_CANVAS = "CHANGE_WIDTH_CANVAS";
const CHANGE_HEIGTH_CANVAS = "CHANGE_HEIGTH_CANVAS";

type backgroundReducerType = {
    bgColor: string,
    width: number,
    height: number
}

const defaultState: backgroundReducerType = {
    bgColor: '#cec7b4',
    width: 700,
    height: 450
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

export const backgroundReducer = (state = defaultState, action: AnyAction) :backgroundReducerType => {
    switch (action.type) {
        case CHANGE_BACKGROUND:
            return {...state, bgColor: action.newColor}
        case CHANGE_WIDTH_CANVAS:
            return {...state, width: action.width}
        case CHANGE_HEIGTH_CANVAS:
            return {...state, height: action.height}
        default:
            return state
    }
}