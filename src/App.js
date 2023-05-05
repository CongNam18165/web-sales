import { Routes, Route} from "react-router-dom"
import HomePage from "./ComponentHome/Home"
import NewsPage from "./ComponentNews/News"
import About from "./ComponentAbout/About"


import GlobalStyles from "./GlobalStyles"

function App() {
  return (
      <GlobalStyles>
    <div className="App">
     
   <Routes>
    <Route path = "/" element = {<HomePage/>}/>
    <Route path = "/news" element = {<NewsPage/>}/>
    <Route path = "/about" element = {<About/>}/>    
   </Routes>
    </div>
   </GlobalStyles>
  )
}

export default App;
