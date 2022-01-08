import { createStore, combineReducers } from 'redux'
import { buttonsReducer } from './buttonsReducer'
import { backgroundReducer } from './backgroundReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { ReducerImg } from './insertImgReducer'
import { ReducerText } from './insertTextReducer'

const rootReducer = combineReducers({
    buttonsReducer,
    backgroundReducer,
    ReducerImg,
    ReducerText
})

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>