type buttonsReducerType = {
    visibleDescGreetings: number,
    visibleDescArtObj: number,
    visibleDescBackground: number,
    visibleDescInsertPic: number,
    visibleDescSave: number,
    visibleDescText: number
}

type buttonsAction = {
    type: string,
    payload: number
}

const defaultState: buttonsReducerType = {
    visibleDescGreetings: 1,
    visibleDescArtObj: 0,
    visibleDescBackground: 0,
    visibleDescInsertPic: 0,
    visibleDescSave: 0,
    visibleDescText: 0
}

export const buttonsReducer = (state = defaultState, action: buttonsAction) :buttonsReducerType => {
    switch (action.type) {
        case "CLEAR_DESC":
            return {...state, 
                visibleDescGreetings: 0, 
                visibleDescArtObj: 0,
                visibleDescBackground: 0,
                visibleDescInsertPic: 0,
                visibleDescSave: 0,
                visibleDescText: 0
            }
        case "RENDER_DESC_GREETING":
            return {...state, visibleDescGreetings: action.payload}
        case "RENDER_DESC_ARTOBJ":
            return {...state, visibleDescArtObj: action.payload}
        case "RENDER_DESC_BACKGROUND":
            return {...state, visibleDescBackground: action.payload}
        case "RENDER_DESC_INSERT_PIC":
            return {...state, visibleDescInsertPic: action.payload}
        case "RENDER_DESC_SAVE":
            return {...state, visibleDescSave: action.payload}
        case "RENDER_DESC_TEXT":
            return {...state, visibleDescText: action.payload}
        default:
            return state
    }
}