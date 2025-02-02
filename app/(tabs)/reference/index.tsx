import { Link } from 'expo-router'
import { AppText } from '~/components/AppText'

export default function Index() {
  return (
    <Link href="/referenceModal/foo/bar">
      <AppText>Foo</AppText>
    </Link>
  )
}
