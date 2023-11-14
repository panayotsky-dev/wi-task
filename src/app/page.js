import Image from 'next/image'
import Header from './components/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#F6F6F6]">
      <Header />
    </main>
  )
}