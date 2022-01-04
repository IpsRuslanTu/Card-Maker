import { createStore, combineReducers } from 'redux'
import { buttonsReducer } from './buttonsReducer';
import { backgroundReducer } from './backgroundReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
import { insertImgReducer } from './insertImgReducer';

const rootReducer = combineReducers({
    buttonsDesc: buttonsReducer,
    stateBackground: backgroundReducer,
    workWithImg: insertImgReducer
})

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>