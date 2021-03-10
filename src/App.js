import './App.css';
import Product from './components/Product'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Detail from './components/Detail'
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Product}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/Home" component={Home}/>
        </Switch>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
