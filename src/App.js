
import './App.css';
import RootLayout from './componants/root/RootLayout';
import Home from './pages/Home';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider,Routes} from'react-router-dom'
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Error from './pages/Error';
import Cart from './pages/Cart';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Checkout from './pages/Checkout';
import SingUp from './pages/SingUp';
import LogIn from './pages/LogIn';

let router = createBrowserRouter(createRoutesFromElements(
 <Route element={<RootLayout/>}>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/contacts' element={<Contacts/>}></Route>
  <Route path='/product' element={<Products/>}></Route>
  <Route path='/product/:id' element={<ProductDetails/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  <Route path='/checkout' element={<Checkout/>}></Route>
  <Route path='/singup' element={<SingUp/>}></Route>
  <Route path='/login' element={<LogIn/>}></Route>
  <Route path='*' element={<Error/>}></Route>
 </Route>

))

function App() {
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
