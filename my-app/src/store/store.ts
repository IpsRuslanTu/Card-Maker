import { createStore, combineReducers } from 'redux'
import { buttonsReducer } from './buttonsReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
import { backgroundReducer } from './backgroundReducer';

const rootReducer = combineReducers({
    buttonsDesc: buttonsReducer,
    stateBackground: backgroundReducer
})

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>