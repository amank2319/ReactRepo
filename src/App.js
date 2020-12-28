import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './contents/Home';
import Products from './contents/Products';
import About from './contents/About';
import Support from './contents/Support';
import ScrollToTop from './components/ScrollToTop';

function App() {
<ScrollToTop/>
return (  
<div className="App">
<Navbar />
<Home />
<Products />
<About />
<Support />
</div>
)
}
export default App;