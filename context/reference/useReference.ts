import { useContext } from 'react'
import ReferenceContext from './context'

export function useReference() {
  const ctx = useContext(ReferenceContext)

  if (!ctx) {
    throw new Error(
      'components must be wrapped in the ReferenceProvider to access context'
    )
  }

  return ctx
}
