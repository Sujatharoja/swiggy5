import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Search from "../pages/search"
import Home from "../pages/Home"
import RestoPage from "../pages/resto"
import Cart from "../pages/cart"
import Store from "../redux/store"
import { Provider } from "react-redux";


function App(){
    console.log(Store)
    return(
        <Provider store={Store}>
       <BrowserRouter>
          <Routes>
              <Route path='/'element={<AppLayout/>}>
                 <Route path='/'element={<Home/>}></Route>
                  <Route path='Search'element={<Search/>}></Route>
                  <Route path="resto/:id" element={<RestoPage/>}></Route>
                  <Route path="Cart" element={<Cart/>}></Route>
                  
                  
              </Route>
          </Routes>
       </BrowserRouter>
       </Provider>
     
    )
}
export default App