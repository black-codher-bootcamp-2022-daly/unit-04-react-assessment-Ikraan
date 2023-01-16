import './styles/App.css';
import React, {Fragment, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import data from './models/data.json';
import ProductList from './components/ProductList';
import Search from './components/Search';
import Basket from './components/Basket';
import BasketCount from './components/BasketCount';
import Header from './components/Header';
import About from './pages/About';
import BasketTotal from './components/BasketTotal';
import Pagination from './components/Pagination';

function App() {

  const itemsPerPage = 4;
  const [items, setItems] = useState(data.slice(0,10));
  const [basket, setBasket] = useState([]);
  const [term, setTerm] = useState(' ');
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  function addToBasket(trackId) {
    products.forEach((product) => {
      if (product.trackId === trackId) {
        product.inBasket = true;
        setBasket((prev) => [...prev, product]);

        if (product.trackPrice) {
          setTotal(parseFloat(total + product.trackPrice));
        } else {
          setTotal(total + 0);
        }
      }
      setCount(count + 1);
    });
  }
  
  function removeFromBasket(trackId) {
    const removeFromCart = [];
    basket.forEach((products) => {
      if (products.trackId !== trackId) {
        removeFromCart.push(products);
      } else {
        products.inBasket = !products.inBasket;
        if (products.trackPrice) {
          setTotal(parseFloat(total - products.trackPrice));
        }
        return products;
      }
    });

    setBasket(removeFromCart);
    setCount(count - 1);
  }

  async function search(value) {
    console.log ("find items that's been clicked", value);

    const results = await fetch(`https://itunes.apple.com/search?term=${value}&limit=50&explicit=no`).then(res => res.json());
    if (!results.error) {
      setItems(results.results.filter(result => result.trackName && basket.findIndex(item => result.id === item.trackId) === -1));
    }
  }

  function BasketList() {
    return(
      <>
      <BasketCount />
      <Basket 
      basket={basket}
      addToBasket={addToBasket}
      removeFromBasket={removeFromBasket}
      basketTotal={total}
      BasketCount={count} />

      <div className='Price-total'>
        Total Price <BasketTotal basketTotal={total} />
      </div>
      </>
    );
  }

  // useEffect(() => {
  //   let basketCountLabel = `Basket: ${basket.length} item` + (basket.length === 1 ? "" : "s");
  //   if (document) {
  //     document.title = basketCountLabel;
  //     document.getElementById("basketlink").innerText = basketCountLabel;
  //   }
  // });

  return (
    <Router>
      <div className="container">
        <h1> Media Store</h1>
        <Routes>
          <Route exact path="/" element={
            <Fragment>
              <Header />
              <Search term={term} search={search} setTerm={setTerm} />
              <ProductList items={items} addToBasket={addToBasket} removeFromBasket={removeFromBasket} itemCount={items.length} />
              <Pagination itemsPerPage={itemsPerPage} item={items.length} />
            </Fragment>
          } />
          <Route path="/basket" element={
            <Fragment>
              <Header />
              <Basket basket={basket} addToBasket={addToBasket} removeFromBasket={removeFromBasket} basketTotal={total} />
            </Fragment>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;