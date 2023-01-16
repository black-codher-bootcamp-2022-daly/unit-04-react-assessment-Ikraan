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
  const [product, setProducts] = useState(data.slice(0,10));
  const [basket, setBasket] = useState([]);
  const [term, setTerm] = useState(' ');
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  function addToBasket(trackId) {
   
    product.forEach((items) => {
      if (items.trackId === trackId) {
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
    console.log("find books that got clicked", value);
    const url = `https://itunes.apple.com/search?term=${value}&limit=30&explicit=no`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setProducts(results.results.filter((result) => result.trackName));
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
  function Home() {
    return (

      <>
        <Search term={term} setTerm={setTerm} handleSubmit={search} />
        <ProductList
          product={product}
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
          basketCount={data.length}
        />
      </>
    );
  }

  return (
    <div className="container">
      <h1>Media Store App</h1>
      <BrowserRouter>
        <Header itemCount={count} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="basket" element={<Basketpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;