import { useState } from 'react'
import UserDataContext from './context'
import { initialState } from './initialState'

export default function UserDataProvider(props: React.PropsWithChildren) {
  const [state, setState] = useState(initialState)

  return (
    <UserDataContext.Provider value={[state, setState]}>
      {props.children}
    </UserDataContext.Provider>
  )
}
