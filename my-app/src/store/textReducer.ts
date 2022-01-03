type textReducerType = {
    fontSize: string,
    fontFamily: string,
    color: string
}

type textAction = {
    type: string,
    payload: {
        fontFamily: string,
        fontSize: string,
        fontColor: string
    }
}

const defaultState: textReducerType = {
    fontSize: '20px',
    fontFamily: '#cec7b4',
    color: '#000000'
}

export const backgroundReducer = (state = defaultState, action: textAction) :textReducerType => {
    switch (action.type) {
        case "PARAMS_TEXT":
            return {...state, fontFamily: action.payload.fontFamily}
        default:
            return state
    }
}