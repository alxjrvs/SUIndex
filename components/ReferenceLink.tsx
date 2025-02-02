import { Link } from 'expo-router'
import { PropsWithChildren } from 'react'
import colors from '~/colors'
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
      style={{
        textDecorationLine: 'underline',
        textDecorationColor: colors.black,
      }}
      href={`/referenceModal/${type}/${name}`}
    >
      {children}
    </Link>
  )
}
