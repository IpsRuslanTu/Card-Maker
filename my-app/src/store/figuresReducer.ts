import { Point, SizeType } from "./types";
import { AnyAction } from "redux";

type CircleAction = {
    type: FiguresActionType.INSERT_CIRCLE;
    name: string;
} & Point & SizeType

type HeartAction = {
    type: FiguresActionType.INSERT_HEART;
    name: string;
} & Point & SizeType

type StarAction = {
    type: FiguresActionType.INSERT_STAR;
    name: string;
} & Point & SizeType

enum FiguresActionType {
    INSERT_CIRCLE = "INSERT_CIRCLE",
    INSERT_HEART = "INSERT_HEART",
    INSERT_STAR = "INSERT_STAR",
    CLEAR_SVG_STATE = "CLEAR_SVG_STATE",
    MOVE_SVG = "MOVE_SVG"
}

type FiguresAction = CircleAction | HeartAction | StarAction;

type FigureType = {
    name: string,
} & Point & SizeType

interface InsertFiguresType {
    arr: Array<FigureType>
}

const defaultState: InsertFiguresType = {
    arr: []
}

export function insertCircle(): CircleAction {
    return {
        type: FiguresActionType.INSERT_CIRCLE,
        name: 'circle',
        width: 200,
        height: 100,
        x: 50,
        y: 50
    }
}

export function insertHeart(): HeartAction {
    return {
        type: FiguresActionType.INSERT_HEART,
        name: 'heart',
        width: 200,
        height: 100,
        x: 50,
        y: 50
    }
}

export function insertStar(): StarAction {
    return {
        type: FiguresActionType.INSERT_STAR,
        name: 'star',
        width: 200,
        height: 100,
        x: 50,
        y: 50
    }
}

export function clearSvg(): AnyAction {
    return {
        type: FiguresActionType.CLEAR_SVG_STATE,
    }
}

export function moveSvg(index: number, x: number, y: number): AnyAction {
    return {
        type: FiguresActionType.MOVE_SVG,
        index: index,
        x: x,
        y: y
    }
}

const newArrSvg = (contentList: FigureType[], id: number, x: number, y: number): FigureType[] => {
    const newContent: FigureType[] = contentList;

    newContent.forEach((item: FigureType, index: number) => {

        if (index === id) {
            newContent[index].x = x;
            newContent[index].y = y;
        }
    })
    return newContent;
}

export const figuresReducer = (state = defaultState, action: AnyAction): InsertFiguresType => {
    switch (action.type) {
        case FiguresActionType.INSERT_CIRCLE:
            return {
                ...state,
                arr: state.arr.concat({
                    name: action.name,
                    width: action.width,
                    height: action.height,
                    x: action.x,
                    y: action.y
                })
            }
        case FiguresActionType.INSERT_HEART:
            return {
                ...state,
                arr: state.arr.concat({
                    name: action.name,
                    width: action.width,
                    height: action.height,
                    x: action.x,
                    y: action.y
                })
            }
        case FiguresActionType.INSERT_STAR:
            return {
                ...state,
                arr: state.arr.concat({
                    name: action.name,
                    width: action.width,
                    height: action.height,
                    x: action.x,
                    y: action.y
                })
            }
        case FiguresActionType.CLEAR_SVG_STATE:
            return {
                ...state,
                arr: []
            }
        case FiguresActionType.MOVE_SVG:
            return {
                ...state,
                arr: newArrSvg(state.arr, action.index, action.x, action.y)
            }
        default:
            return state
    }
}