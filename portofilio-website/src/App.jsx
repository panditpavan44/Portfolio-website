import React from 'react'
import Header from './component/header'
import Hero from './component/Hero';
import About from './component/About';
function App() {
  return ( 
    <div className='bg-gray-900'>
    <Header />
    <Hero/>
    <About/>
    </div>
  );
}

export default App