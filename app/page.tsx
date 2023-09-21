import { Hero } from './components/Hero';
import Airing from './components/Airing';
import AllTime from './components/AllTime';

export default async function Home() {
  return (
    <>
      <Hero />
      <AllTime />
      <Airing />
    </>
  )
}