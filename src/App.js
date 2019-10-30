import React from 'react';
import Navbar from './components/NavbarDesktop'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css';

function App() {
  	return (
		  <div>
			<Navbar/>
			<Content />
			<Footer/>
		  </div>
  	);
}

export default App;
