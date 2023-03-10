import './App.css';
import Navbar from './Navbar';
import Heading from './Heading';
import AboutMe from './Aboutme';
import Infosection from './Infosection';
import Footer from './Footer';
import Fees from './Fees';
import Appointments from './Appointments';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Heading/>
      <AboutMe />
      <Infosection />
      <Fees />
      <Appointments />
      <Footer />
    </div>
  );
}

export default App;
