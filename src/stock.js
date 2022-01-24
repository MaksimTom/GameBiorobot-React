import React, { useState } from 'react';
import Spares from './spares';
function Stock ({coin, setCoin, spares, setSpares,  setImgStatus}){

function setCoinBalance (price, name){
  if ((coin + price) > 100) {
    alert ('lot')} else {
      setCoin(coin + price);
      const copy = Object.assign({}, spares);
      copy[name].balance --;
      // copy[name].balance == 0 ? setImgStatus (spares[name].img.disable) : setImgStatus(spares[name].img.enable);
      setSpares(copy);}
  }
  return <div className="wrapper ">
  <div className='page__number'>
    04
  </div>
    <div className='content'>
    <h2 className='title__h2'>Склад</h2>
    <div className='list__wrapper'>
    <div className='list'>
      <h3 className='title__h3'>Биомеханизм</h3>
      <p className='subtitle__h3'>Стоимость: <span>5</span> монет</p>
      <p  className='inStock'><span>{spares.device.balance}</span>шт.</p>
      <button className='buttons button__stock' disabled={spares.device.balance == 0} onClick={() => setCoinBalance (5, 'device')} >Продать</button>
    </div>
    
    <div className='list'>
      <h3 className='title__h3'>Процессор</h3>
      <p className='subtitle__h3'>Стоимость: <span>3</span> монет</p>
      <p  className='inStock'><span>{spares.cpu.balance}</span>шт.</p>
      <button className='buttons button__stock' disabled={spares.cpu.balance == 0} onClick={() => setCoinBalance (3, 'cpu')} >Продать</button>
    </div>
    
    <div >
      <h3 className='title__h3'>Душа</h3>
      <p className='subtitle__h3'>Стоимость: <span>15</span> монет</p>
      <p className='inStock'><span>{spares.soul.balance}</span>шт.</p>
      <button className='buttons button__stock' disabled={spares.soul.balance == 0} onClick={() => setCoinBalance (15, 'soul')} >Продать</button>
    </div>
    </div>
    </div>
  </div>
}

export default Stock;