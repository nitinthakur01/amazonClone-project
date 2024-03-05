import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomePage, NavBar, ProductPage, SearchResult } from "./components"

const App = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/search" element={<SearchResult/>}/>
            <Route path="/product/:id" element={<ProductPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
