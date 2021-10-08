import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className='App'>
      <BrowserRouter
        basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}
      >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products' component={ProductList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
