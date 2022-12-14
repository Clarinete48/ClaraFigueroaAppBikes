import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './Context/CartContext';
import { NotificationProvider } from './notification/Notification';

function App() {
  // const [page, setPage] = useState('list')

  return (
    <div className="App">
    <NotificationProvider>
     <CartContextProvider>
       <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<ItemListContainer greeting='Nuestras Bikes'/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Bicicletas '/>} />
        <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />  
        </Routes>
       </BrowserRouter>
      </CartContextProvider>
     </NotificationProvider>
    </div>
  );
}

export default App;