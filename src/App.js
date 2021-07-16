
import './App.css';
import { HashRouter, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import BookList from './components/BookList';
import { books } from './assets/books';

function App() {
  return (

    <HashRouter basename='/'>
      <div className="app" >
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
      </div>
    </HashRouter>

  );
}

export default App;
