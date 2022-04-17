import {createStore,applyMiddleware, combineReducers} from 'redux'

import {persistReducer,persistStore} from 'redux-persist'

import thunk from 'redux-thunk'

import { MenuSongListReducer } from './Recommend/reducer'

import { MV_Reducer } from './MV/reducer'

import {SongsReducer} from './SongList/reducer'

import {composeWithDevTools} from 'redux-devtools-extension'
import sessionStorage from 'redux-persist/es/storage/session'
const all_reducer = combineReducers({
    MenuSongListReducer:persistReducer({
        key:'songlists',
        storage:sessionStorage
    },MenuSongListReducer),
    MV_Reducer,
    SongsReducer:persistReducer({
        key:'currentPlay',
        storage:sessionStorage
    },SongsReducer)
})

export const store = createStore(all_reducer,composeWithDevTools(applyMiddleware(thunk)))
export const persiststore = persistStore(store)