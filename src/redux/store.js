import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { combineReducers } from "redux";
const testReducer = (state = { test:0 }, { type, test })=>{
    switch (type) {
        case 'TEST':
            return {
                ...state,
                test: state.test+1
            }
        default:
            return state;
    }
}
const reducers = combineReducers({
    test: testReducer
})

let store
// 初始化store
function initStore(initialState) {
    return createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}

export const initializeStore = (preloadedState) => {
    // store 如果没有被初始化，则使用 initStore 初始化的值
    let _store = store ?? initStore(preloadedState)

    // 如果预加载的 state 或者
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // 对于 SSG 和 SSR 始终创建一个新的 store
    if (typeof window === 'undefined') return _store
    // 如果 store 不存在，使用 _store 的值
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}