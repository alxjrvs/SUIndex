import { Link } from 'expo-router'
import { PropsWithChildren } from 'react'
import colors from '~/colors'
import { ReferencableComponentType } from '~/types'

type Props = {
  type: ReferencableComponentType | undefined
  underlineColor?: (typeof colors)[keyof typeof colors]
  name: string
}
export default function ReferenceLink({
  type,
  children,
  underlineColor = colors.black,
  name,
}: PropsWithChildren<Props>) {
  if (!type) return children
  return (
    <Link
      style={{
        textDecorationLine: 'underline',
        textDecorationColor: underlineColor,
      }}
      href={`/referenceModal/${type}/${name}`}
    >
      {children}
    </Link>
  )
}
