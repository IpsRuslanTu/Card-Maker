import { AnyAction } from "redux";

const INSERT_IMG = "INSERT_IMG";

type insertImgReducerType = {
    arr: Array<ImageType>
}

type ImageType = {
    src: string
    width?: string
    height?: string
    x?: string
    y?: string
}

const defaultState: insertImgReducerType = {
    arr: []
}

export function insertImg(srcImg :string): AnyAction {
    return {
        type: INSERT_IMG,
        newSrc: srcImg
    }
}

export const insertImgReducer = (state = defaultState, action: AnyAction) : insertImgReducerType => {
    switch (action.type) {
        case INSERT_IMG:
            return {
                ...state, 
                arr: state.arr.concat({src: action.newSrc})
            }
        default:
            return state
    }
}