import { Link } from 'expo-router'
import { PropsWithChildren } from 'react'
import { ReferencableComponentType } from '~/types'

type Props = {
  type: ReferencableComponentType | undefined
  name: string
}
export default function ReferenceLink({
  type,
  children,
  name,
}: PropsWithChildren<Props>) {
  if (!type) return children
  return (
    <Link
      style={{ textDecorationLine: 'underline' }}
      href={`/referenceModal/${type}/${name}`}
    >
      {children}
    </Link>
  )
}
