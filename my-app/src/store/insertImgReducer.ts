import { AnyAction } from "redux";
import { ImageType } from "./types";

const INSERT_IMG = "INSERT_IMG";

type InsertImgType = {
    arr: Array<ImageType>
}

const defaultState : InsertImgType = {
    arr: []
}

export function insertImg(srcImg: string): AnyAction {
    return {
        type: INSERT_IMG,
        id: '1',
        newSrc: srcImg,
        x: 0,
        y: 0
    }
}

export const insertImgReducer = (state = defaultState, action: AnyAction) : InsertImgType => {
    switch (action.type) {
        case INSERT_IMG:
            return {
                ...state, 
                    arr: state.arr.concat({
                        src: action.newSrc,
                        id: action.id,
                        x: action.x, 
                        y: action.y,
                    }),
            }
        default:
            return state
    }
}