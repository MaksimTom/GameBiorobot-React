import React from 'react';

function Header() {
	return <>
  <div className='logo'>
    <img src='/img/logo.png'></img>
    <button>Произвести биоробота</button>
  </div>
  <div className='wrapper'>
    <div className='page__number'>
      01
    </div>
      <div className='content__header'>
      <h1 className='factory__title'>
        Фабрика по производству биороботов
      </h1>
      <p className='factory__subtitle subtitle'>класса «монитор-кресло»</p>
      </div>
      <img className='img__robots' src='/img/robots.png'></img>
  </div>
  </>
}

export default Header;