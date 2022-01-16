import { AnyAction } from "redux";
import { ImageType } from "./types";

const INSERT_IMG = "INSERT_IMG";
const CLEAR_IMG_STATE = "CLEAR_IMG_STATE";
const MOVE_IMG = "MOVE_IMG";

type InsertImgType = {
    arr: Array<ImageType>
}

const defaultState : InsertImgType = {
    arr: []
}

export function insertImg(srcImg: string): AnyAction {
    return {
        type: INSERT_IMG,
        newSrc: srcImg,
        x: 100,
        y: 100
    }
}

export function clearImages(): AnyAction {
    return {
        type: CLEAR_IMG_STATE,
    }
}

export function moveImg(index: number, x: number, y: number): AnyAction {
    return {
        type: MOVE_IMG,
        index: index,
        x: x,
        y: y
    }
}

const newArr = (contentList: ImageType[], id: number, x: number, y: number): ImageType[] => {
    const newContent: ImageType[] = contentList;

    newContent.forEach((item: ImageType, index: number) => {

        if (index === id) {
            newContent[index].x = x;
            newContent[index].y = y;
        }
    })
    return newContent;
}

export const ReducerImg = (state = defaultState, action: AnyAction) : InsertImgType => {
    switch (action.type) {
        case CLEAR_IMG_STATE:
            return {
                ...state, 
                    arr: []
            }
        case INSERT_IMG:
            return {
                ...state, 
                    arr: state.arr.concat({
                        src: action.newSrc,
                        x: action.x, 
                        y: action.y,
                        selected: false
                    })
            }
        case MOVE_IMG:
            return {
                ...state, 
                    arr: newArr(state.arr, action.index, action.x, action.y)
            }
        default:
            return state
    }
}