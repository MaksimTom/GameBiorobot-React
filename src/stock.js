import React, { useState } from 'react';
import Spares from './spares';
function Stock ({coin, setCoin, spares, setSpares,  setImgStatus}){

function setCoinBalance (price, name){
  setCoin(coin + price);
  const copy = Object.assign({}, spares);
  copy[name].balance --;
  copy[name].balance == 0 ? setImgStatus (spares[name].img.disable) : setImgStatus(spares[name].img.enable);
  setSpares(copy);
}
  return <div className="wrapper ">
  <div className='page__number'>
    04
  </div>
    <div className='content'>
    <h2 className='title__h2'>Склад</h2>
    <div>
      
      <h3>Биомеханизм</h3>
      <p>Стоимость: <span>5</span> монет</p>
      <p><span>{spares.device.balance}</span>шт.</p>
      <button disabled={spares.device.balance == 0} onClick={() => setCoinBalance (5, 'device')} >Продать</button>
    </div>
    
    <div>
      <h3>Процессор</h3>
      <p>Стоимость: <span>3</span> монет</p>
      <p><span>{spares.cpu.balance}</span>шт.</p>
      <button disabled={spares.cpu.balance == 0} onClick={() => setCoinBalance (3, 'cpu')} >Продать</button>
    </div>
    
    <div>
      <h3>Душа</h3>
      <p>Стоимость: <span>15</span> монет</p>
      <p><span>{spares.soul.balance}</span>шт.</p>
      <button disabled={spares.soul.balance == 0} onClick={() => setCoinBalance (15, 'soul')} >Продать</button>
    </div>
    
    </div>
  </div>
}

export default Stock;