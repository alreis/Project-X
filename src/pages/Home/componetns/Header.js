import React from 'react';

function Header() {
  return (
    <header className='header'>
      <div className='toolbar'>
        <div className=''>
          <span>Project X</span>
        </div>
        <div className=''>
          <button>New Post</button>
          <span>img1</span>
          <span>img2</span>
        </div>
      </div>
    </header>
  )
}

export default Header;