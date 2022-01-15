interface CircleAction {
    type: FiguresActionType.INSERT_CIRCLE
    radius: number;
    cx: number;
    cy: number
}

interface RectangleAction {
    type: FiguresActionType.INSERT_RECTANGLE,
    lengthX: number,
    lengthY: number,
    x: number,
    y: number
}

interface TriangleAction {
    type: FiguresActionType.INSERT_TRIANGLE
}

enum FiguresActionType {
    INSERT_CIRCLE = "INSERT_CIRCLE",
    INSERT_RECTANGLE = "INSERT_RECTANGLE",
    INSERT_TRIANGLE = "INSERT_TRIANGLE"
}

type FiguresAction = CircleAction | RectangleAction | TriangleAction;

interface InsertFiguresType {
    arr: any[]
}

const defaultState : InsertFiguresType = {
    arr: []
}

export function insertCircle() :CircleAction {
    return {
        type: FiguresActionType.INSERT_CIRCLE,
        radius: 50,
        cx: 50,
        cy: 50
    }
}

export const figuresReducer = (state = defaultState, action: FiguresAction) : InsertFiguresType => {
    switch (action.type) {
        case FiguresActionType.INSERT_CIRCLE:
            return {
                ...state, 
                    arr: state.arr.concat({
                        cx: action.cx, 
                        cy: action.cy,
                        radius: action.radius
                    })
            }
        default:
            return state
    }
}