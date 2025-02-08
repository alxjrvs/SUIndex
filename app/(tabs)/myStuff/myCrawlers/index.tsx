import { Link } from 'expo-router'

export default function MyCrawlers() {
  return (
    <>
      <Link href="/myStuff/myCrawlers/new">New Crawler</Link>
      <Link href="/myStuff/myCrawlers/foo">Crawler</Link>
    </>
  )
}
