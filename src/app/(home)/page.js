
import Categories from './Categories'
import HeroSlider from './HeroSlider'

export default function Home() {
  return (
    <main className=" flex-col items-center justify-between rounded-md ">
  <HeroSlider></HeroSlider>
  <Categories />
    </main>
  )
}
