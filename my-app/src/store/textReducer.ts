type textReducerType = {
    fontSize: string,
    fontFamily: string,
    color: string
}

type textAction = {
    type: string,
    payload: any
}

const defaultState: textReducerType = {
    fontSize: '20px',
    fontFamily: '#cec7b4',
    color: '#000000'
}

export const backgroundReducer = (state = defaultState, action: textAction) :textReducerType => {
    switch (action.type) {
        case "PARAMS_TEXT":
            return {...state, fontSize: action.payload, fontFamily: action.payload, color: action.payload}
        default:
            return state
    }
}