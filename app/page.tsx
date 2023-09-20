import { Hero } from './components/Hero';
import Ranking from './components/Ranking';

export default async function Home() {
  return (
    <>
      <Hero />
      <Ranking type="all-time" title="Top All Time" />
      <Ranking type="airing" title="Top Airing" />
    </>
  )
}