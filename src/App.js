import './App.css';

import {Route} from 'react-router-dom'

import Welcome from './Welcome'
import Product from './Product';






function App() {


  return (
    <div>
      <Route path="/welcome" >
        <Welcome />
      </Route>
      <Route path="/product" >
          <Product/>
      </Route>
    </div>
  );
}

export default App;
