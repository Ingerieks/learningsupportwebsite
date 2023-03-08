import './App.css';
import Navbar from './Navbar';
import Heading from './Heading';
import AboutMe from './Aboutme';
import Infosection from './Infosection';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Heading/>
      <AboutMe />
      <Infosection />
      <Footer />
    </div>
  );
}

export default App;
