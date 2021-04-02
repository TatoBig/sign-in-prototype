import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { useSelector, useDispatch } from 'react-redux'

let store

const initialState = {  
  isLogged: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
        return {
        ...state,
        isLogged: true,
        }
    case 'SIGN_OUT':
        return {
        ...state,
        isLogged: false,
        }
    default:
      return state
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
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

export function useSignIn () {
    const isLogged = useSelector((state) => state.isLogged)
    const dispatch = useDispatch()
    const signIn = () =>
      dispatch({
        type: 'SIGN_IN',
      })  
    const signOut = () => 
      dispatch({
          type: 'SIGN_OUT'
      })
    return { isLogged, signIn, signOut }
  }