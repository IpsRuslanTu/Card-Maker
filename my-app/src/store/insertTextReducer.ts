import { AnyAction } from "redux";
import { TextType } from "./types";

const INSERT_TEXT = "INSERT_TEXT";
const CHANGE_FONT_SIZE = "CHANGE_FONT_SIZE";
const CHANGE_FONT_COLOR = "CHANGE_FONT_COLOR";
const CHANGE_FONT_FAMILY = "CHANGE_FONT_FAMILY";
const CHANGE_FONT_WEIGHT = "CHANGE_FONT_WEIGHT";

type InsertTextType = {
    arr: Array<TextType>,
    fontColor: string,
    fontSize: string,
    fontFamily: string,
    fontWeight: string,
    x: string,
    y: string,
}

const defaultState : InsertTextType = {
    arr: [],
    x: '200px',
    y: '200px',
    fontWeight: '400',
    fontColor: '#000000',
    fontFamily: 'Arial',
    fontSize: '20'
}

export function insertText(): AnyAction {
    return {
        type: INSERT_TEXT,
        text: 'Input Text',
    }
}

export function getFontSize(newFontSize: string) : AnyAction {
    console.log(newFontSize);
    return {
        type: CHANGE_FONT_SIZE,
        newFontSize: newFontSize
    }
}

export function getFontColor(newFontColor: string) : AnyAction {
    return {
        type: CHANGE_FONT_COLOR,
        newFontColor: newFontColor
    }
}

export function getFontFamily(newFontFamily: string) : AnyAction {
    return {
        type: CHANGE_FONT_FAMILY,
        newFontFamily: newFontFamily
    }
}

export function getFontWeight(newFontWeight: string) : AnyAction {
    return {
        type: CHANGE_FONT_WEIGHT,
        newFontWeight: newFontWeight
    }
}

export const ReducerText = (state = defaultState, action: AnyAction) : InsertTextType => {
    switch (action.type) {
        case INSERT_TEXT:
            return {
                ...state, 
                    arr: state.arr.concat({
                        x: '200px',
                        y: '200px',
                        text: action.text,
                        fontFamily: state.fontFamily,
                        fontSize: state.fontSize,
                        fontColor: state.fontColor,
                        fontWeight: state.fontWeight
                    }),
            }
        case CHANGE_FONT_SIZE:
            return {...state, fontSize: action.newFontSize}
        case CHANGE_FONT_FAMILY:
            return {...state, fontFamily: action.newFontFamily}
        case CHANGE_FONT_WEIGHT:
            return {...state, fontWeight: action.newFontWeight}
        case CHANGE_FONT_COLOR:
            return { ...state, fontColor: action.newFontColor}
        default:
            return state
    }
}