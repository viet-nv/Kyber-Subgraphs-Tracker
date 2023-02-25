import { configureStore } from '@reduxjs/toolkit'
import { load, save } from 'redux-localstorage-simple'
import { setupListeners } from '@reduxjs/toolkit/query/react'

const PERSISTED_KEYS: string[] = []

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
    }).concat(save({ states: PERSISTED_KEYS })),
  preloadedState: load({ states: PERSISTED_KEYS }),
})

setupListeners(store.dispatch)

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
