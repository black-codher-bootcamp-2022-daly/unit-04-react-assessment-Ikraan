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


function App() {
  const [products, setProducts] = useState(data);
  const [basket, setBasket] = useState([]);
  const [basketTotal,setbasketTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [term, setTerm] = useState("");
  
  function addToBasket(trackId) {
    products.map((product) => {
      console.log(product);
      if (product.trackId === trackId){
        product.inBasket = true;
        setBasket((prev)=> [...prev, product]);
      if (product.trackPrice) {setbasketTotal (parseFloat(basketTotal + product.trackPrice)); } 
      else { setbasketTotal(basketTotal + 0);}
      } setCount(count + 1);
    });
  }

  function removeFromBasket(trackId) {
    const removeFromCart = [];
    basket.filter((products) => {
      console.log(products);
      if (products.trackId !== trackId) {
        removeFromCart.push(products);
      } else {
        products.trackId = !products.trackId;
        if (products.trackPrice) {
          setbasketTotal(parseFloat(basketTotal - products.trackPrice));
        }
        return products;
      }
    });
    setBasket(removeFromCart);
    setCount(count - 1);
  }
  async function search(value) {
    const url = `https://itunes.apple.com/search?term=${value}&limit=30&explicit=no`;
    const results = await fetch(url).then((res) => res.json());
    if (!results.error) { setProducts( results.results.filter((result) =>
            result.trackName && basket.findIndex((product) =>
             result.id === product.trackId) === -1
        )
      );
    }
  }
function BasketList() {
  return (
    <>
      <BasketCount />
      <Basket basket ={basket}
      addToBasket={addToBasket}
      removeFromBasket={removeFromBasket}
      BasketTotal={BasketTotal}
      BasketCount={count} />
    </>)}
    <div className='Price'> Total Price <BasketTotal basketTotal={basketTotal} />
    </div>
  

function Home() {
  return ( 
  <div className='home'>
    <h1 className='title'>Music store 🎼</h1>
    <Header itemCount={<BasketCount BasketCount={basket.length}/>} />
    <Search term={term} setTerm={setTerm} search={search} />
    <h1>{basket.length}</h1> 
    {/* {basket.map((product) => ( */}
        <ProductList
            product={products}
            key={products.trackId}
            addToBasket={addToBasket}
            inBasket={true}
            removeFromBasket={removeFromBasket}
            itemCount={data.length} />
  </div>
  )
}
return (
  <Router>
    <div className="app-container">
      <Header itemCount={count} />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="./pages/about" element={<About itemCount={<BasketCount basketCount={basket.length} />} />} />
        <Route path="./components/basket" element={<BasketList />} />
      </Routes>
    </div>
  </Router>
);
}

export default App;

