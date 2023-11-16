import Image from 'next/image'
import Header from './components/Header'
import CardComponent from './components/Card/CardComponent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  bg-[#F6F6F6]">
      <Header />
      <CardComponent />
    </main>
  )
}
