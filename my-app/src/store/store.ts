import { createStore, combineReducers, applyMiddleware } from 'redux'
import { buttonsReducer } from './buttonsReducer'
import { backgroundReducer } from './backgroundReducer'
import { ReducerImg } from './imgReducer'
import { ReducerText } from './textReducer'
import { figuresReducer } from './figuresReducer'
import { logger } from './middlewares/logger'

const rootReducer = combineReducers({
    buttonsReducer,
    backgroundReducer,
    ReducerImg,
    ReducerText,
    figuresReducer
})

export const store = createStore(rootReducer, applyMiddleware(logger));

export type RootState = ReturnType<typeof rootReducer>