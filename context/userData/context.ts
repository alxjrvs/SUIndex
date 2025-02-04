import { createContext } from 'react'
import { initialState } from './initialState'
import { ContextValue } from './types'

export default createContext<ContextValue>([initialState, () => null])
