import Hero from '../components/OnePage/Hero'
import About from '../components/OnePage/About'
import BannerCourse from '../components/OnePage/BannerCourse'
import Services from '../components/OnePage/PServices'
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
        <BannerCourse />
        {/* <BannerCourse discount={20} /> */}
        <Skills />
        <Contact />
      </>
  );
}

export default Home;