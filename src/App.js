import './App.css';
import Navbar from './components/layouts/Navbar';
import Intro from './components/layouts/Intro';
import About from './About';
import Myskills from './components/layouts/Myskills';
import Mylearning from './components/layouts/Mylearning';
import Footer from './components/layouts/Footer';

const App = ()=> {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Intro />
        <About />
        <Myskills />
        <Mylearning />
      </div>
      <Footer />
    </div>
  );
}

export default App;
