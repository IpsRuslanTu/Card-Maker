import { createStore, combineReducers } from 'redux'
import { buttonsReducer } from './buttonsReducer';
import { backgroundReducer } from './backgroundReducer';
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    buttonsDesc: buttonsReducer,
    stateBackground: backgroundReducer
})

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>