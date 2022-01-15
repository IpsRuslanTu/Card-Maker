import { createStore, combineReducers } from 'redux'
import { buttonsReducer } from './buttonsReducer'
import { backgroundReducer } from './backgroundReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { ReducerImg } from './imgReducer'
import { ReducerText } from './textReducer'
import { figuresReducer } from './figuresReducer'

const rootReducer = combineReducers({
    buttonsReducer,
    backgroundReducer,
    ReducerImg,
    ReducerText,
    figuresReducer
})

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>