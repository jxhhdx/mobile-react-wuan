import { useMemo } from 'react'
import { createStore, applyMiddleware,combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
let store
const loginInfoInitialState = {
    data: {},
    email: ''
}
const loginInfo = (state=loginInfoInitialState, action) => {
    switch (action.type) {
        case 'USER_INFO_INIT':
            return {
                ...state,
                data: action.data
            }
        case 'CACHE_EMAIL':
            return {
                ...state,
                email: action.email
            }
        default:
            return { ...state };
    }
}
const reducers = combineReducers({
    loginInfo
})
const persistConfig = {
    key: 'primary',
    storage,
    whitelist: ['data', 'loginInfo', 'email'], // place to select which state you want to persist
}
const persistedReducer = persistReducer(persistConfig, loginInfo)
function makeStore(initialState = loginInfoInitialState) {
    return createStore(
        persistedReducer,
        initialState,
        composeWithDevTools(applyMiddleware())
    )
}
export const initializeStore = (preloadedState) => {
    let _store = store ?? makeStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = makeStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}
export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}