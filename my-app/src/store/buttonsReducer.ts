const RENDER_DESC_ARTOBJ = "RENDER_DESC_ARTOBJ"

type buttonsReducerType = {
    visibleDescGreetings: boolean,
    visibleDescArtObj: boolean,
    visibleDescBackground: boolean,
    visibleDescInsertPic: boolean,
    visibleDescSave: boolean,
    visibleDescText: boolean
}

type buttonsAction = {
    type: string,
    payload: boolean
}

const defaultState: buttonsReducerType = {
    visibleDescGreetings: true,
    visibleDescArtObj: false,
    visibleDescBackground: false,
    visibleDescInsertPic: false,
    visibleDescSave: false,
    visibleDescText: false
}

export const buttonsReducer = (state = defaultState, action: buttonsAction) :buttonsReducerType => {
    switch (action.type) {
        case "CLEAR_DESC":
            return {...state, 
                visibleDescGreetings: false, 
                visibleDescArtObj: false,
                visibleDescBackground: false,
                visibleDescInsertPic: false,
                visibleDescSave: false,
                visibleDescText: false
            }
        case RENDER_DESC_ARTOBJ:
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