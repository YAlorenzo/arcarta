import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import HeroImg from './components/HeroImg'
import CardsList from './components/CardsList'
import AntiMoney from './components/AntiMoney'
import Form from './components/Form'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#FFF8EE]">
        <Hero />
        <HeroImg />

        <div className="gradient-backgraund">
          <CardsList />
          <AntiMoney />
          <Form />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
