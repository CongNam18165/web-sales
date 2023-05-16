import { Routes, Route } from "react-router-dom"


import GlobalStyles from "./GlobalStyles"
import Navbar from "./components/Navbar/index"
import Footer from "./components/Footer/index"
import HomePage from "./pages/Home/Home"
import News from "./pages/News/News"
import About from "./pages/About/About"
import Product from "./pages/Product/index"
import Cart from "./pages/Cart/index"
import CheckOut from "./pages/CheckOut"
function App() {
  return (
    <GlobalStyles>
      <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path = "/cart" element = {<Cart />} />
          <Route path= "/product/:id" element = {<Product />} />
          <Route path = "/checkOut" element = {<CheckOut />} />
        </Routes>
        <Footer/>
      </div>
    </GlobalStyles>
  )
}

export default App;
