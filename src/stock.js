import React, { useState } from 'react';
import Spares from './spares';
function Stock ({coin, setCoin, spares, setSpares}){

  
function setCoinBalance (price, index){
  setCoin(coin + price);
  const copy = Object.assign([], spares);
    copy[index].balance --;
    setSpares(copy);
}
  return <div>
    <h2>Склад</h2>
    <h3>Биомеханизм</h3>
    <p>Стоимость: <span>5</span> монет</p>
    <p><span>{spares[0].balance}</span>шт.</p>
    <button disabled={spares[0].balance == 0} onClick={() => setCoinBalance (5, 0)} >Продать</button>

    <h3>Процессор</h3>
    <p>Стоимость: <span>3</span> монет</p>
    <p><span>{spares[1].balance}</span>шт.</p>
    <button disabled={spares[1].balance == 0} onClick={() => setCoinBalance (3, 1)} >Продать</button>

    <h3>Душа</h3>
    <p>Стоимость: <span>15</span> монет</p>
    <p><span>{spares[2].balance}</span>шт.</p>
    <button disabled={spares[2].balance == 0} onClick={() => setCoinBalance (15, 2)} >Продать</button>
  </div>
}

export default Stock;