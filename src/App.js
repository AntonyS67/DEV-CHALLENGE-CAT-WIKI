import './App.css';
import Banner from './components/Banner';
import Breed from './components/Breed';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div className="container">
      <Nav/>
      <Banner/>
      <Breed/>
      <Footer/>
    </div>
  );
}

export default App;
