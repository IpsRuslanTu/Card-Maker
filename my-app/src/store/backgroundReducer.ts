import { AnyAction } from "redux";

const CHANGE_BACKGROUND = "CHANGE_BACKGROUND";

type backgroundReducerType = {
    bgColor: string
}

const defaultState: backgroundReducerType = {
    bgColor: '#cec7b4'
}

export function changeBackground(newColor: string): AnyAction {
    return {
        type: CHANGE_BACKGROUND,
        newColor: newColor
    }
}

export const backgroundReducer = (state = defaultState, action: AnyAction) :backgroundReducerType => {
    switch (action.type) {
        case CHANGE_BACKGROUND:
            return {...state, bgColor: action.newColor}
        default:
            return state
    }
}