import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/shop';
import ShopCategory from './pages/shopCategory';
import Product from './pages/product';
import Cart from './pages/cart'
import { fetchItems } from './utils/fetchItems';

function App() {

  fetchItems();
  

  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes>

            <Route path='/' element={<Shop/>}/>

            <Route path='/mens' element={<ShopCategory category="men"/>}/>
            <Route path='/womens' element={<ShopCategory category="women"/>}/>

            <Route path='/product' element={<Product/>}>

              <Route path=':productId' element={<Product/>}/>

            </Route>

            <Route path='/cart' element={<Cart/>}/>

          </Routes>
        </BrowserRouter>
    </div>

  )
}

export default App
