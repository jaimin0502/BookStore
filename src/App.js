import logo from './logo.svg';
import './App.css';
import Bookitem from './components/Bookitem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import BookList from './components/BookList';
import { books } from './assets/books';

function App() {
  return (

    <Router>
      <div className="app" >
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <div className="home-row">
              <BookList list={books} listName="books" />
            </div>
          </Route>

          <Route path="/cart" exact>
            <Navbar />
            <div className="home-row"> <Cart /></div>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
