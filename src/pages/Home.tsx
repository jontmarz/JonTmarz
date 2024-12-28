import Hero from '../components/OnePage/Hero'
import About from '../components/OnePage/About'
import Services from '../components/OnePage/Services'
import Portfolio from '../components/OnePage/Portfolio'
import Skills from '../components/OnePage/Skills'
import Contact from '../components/OnePage/Contact'

function Home() {
  return (
      <>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Skills />
        <Contact />
      </>
  );
}

export default Home;