import './styles/main.css';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import { DarkModeProvider } from './helpers/context';

function App() {
  return (
    <DarkModeProvider>
      <Banner />
      <About />
      <Carousel />
      <Projects />
      <Footer />
    </DarkModeProvider>
  );
}

export default App;
