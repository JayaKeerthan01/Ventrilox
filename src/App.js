import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ToolsWeUse from './components/ToolsWeUse';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Process from './components/Process';


function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Home />
      <Services />
      <AboutUs />
      <Process/>
      <ToolsWeUse />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

