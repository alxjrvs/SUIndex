import { Link } from 'expo-router'
import { PropsWithChildren } from 'react'

type Props = {
  type: 'trait'
  name: string
}
export default function ReferenceLink({
  type,
  children,
  name,
}: PropsWithChildren<Props>) {
  return <Link href={`/referenceModal/${type}/${name}`}>{children}</Link>
}
