import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import BreedState from './context/breeds/breedState';
import Home from './Screens/Home';
import MostBreeds from './Screens/MostBreeds';
import DetailBreed from './Screens/DetailBreed';

function App() {
  return (
    <div className="container">
      <BreedState>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/top" exact component={MostBreeds}/>
            <Route path="/breed/:name" exact component={DetailBreed}/>
          </Switch>
        </Router>
      </BreedState>
    </div>
  );
}

export default App;
