interface CircleAction {
    type: FiguresActionType.INSERT_CIRCLE;
    name: string;
    width: number;
    height: number;
    x: number;
    y: number
}

interface HeartAction {
    type: FiguresActionType.INSERT_HEART;
    name: string;
    width: number;
    height: number;
    x: number;
    y: number
}

interface StarAction {
    type: FiguresActionType.INSERT_STAR;
    name: string;
    width: number;
    height: number;
    x: number;
    y: number
}

enum FiguresActionType {
    INSERT_CIRCLE = "INSERT_CIRCLE",
    INSERT_HEART = "INSERT_HEART",
    INSERT_STAR = "INSERT_STAR"
}

type FiguresAction = CircleAction | HeartAction | StarAction;

type FigureType = {
    name: string,
    x: number,
    y: number,
    width: number,
    height: number
}

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
        x: 450,
        y: 150
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

export const figuresReducer = (state = defaultState, action: FiguresAction): InsertFiguresType => {
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
        default:
            return state
    }
}