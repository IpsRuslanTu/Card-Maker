type backgroundReducerType = {
    bgColor: string
}

type backgroundAction = {
    type: string,
    payload: string
}

const defaultState: backgroundReducerType = {
    bgColor: '#cec7b4'
}

export const backgroundReducer = (state = defaultState, action: backgroundAction) :backgroundReducerType => {
    switch (action.type) {
        case "CHANGE_BACKGROUND":
            return {...state, bgColor: action.payload}
        default:
            return state
    }
}