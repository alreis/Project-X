import React from 'react';
import Header from './componetns/Header'
import './style.css'

function Home() {
  return <div>
    <Header/>
    <main className='main'>
      <div className='navbar'>Navbar</div>
      <div className='feed'>Feed</div>
    </main>
  </div>
}

export default Home;
