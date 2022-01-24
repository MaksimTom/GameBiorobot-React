import React, { useState } from 'react';
function Market ({coin, setCoin, spares, setSpares, setImgStatus}){
  let price = 6;
  const [disabled, setDisabled] = useState(true);


  function setCoinBalance (price, name){
    setCoin(coin - price);
    const copy = Object.assign({}, spares);
    copy[name].balance ++;
    // copy[name].balance == 0 ? setImgStatus 
    // (spares[name].img.disable) : setImgStatus(spares[name].img.enable);
    setSpares(copy);
  }

return <div className="wrapper ">
<div className='page__number'>
  03
</div>
  <div className='content'>
  <h2 className='title__h2'>
    Рынок комплектующих
  </h2>
  <div className='list__wrapper'>
    <div className='list'>
    <div className='imgMarket'>
      <img src='/img/biomeh.png'></img>
      </div>
    <h3 className='title__h3'>Биомеханизм</h3>
    <p className='subtitle__h3'>Стоимость: <span>7</span> монет</p>
    <button className='buttons button__market' disabled={coin < 7 } onClick={() => setCoinBalance (7, 'device')} >Установить</button>
    </div>
    
    <div className='list'>
      <div className='imgMarket'>
      <img src='/img/CPUicon.png'></img>
      </div>
    
    <h3 className='title__h3'>Процессор</h3>
    <p className='subtitle__h3'>Стоимость: <span>5</span> монет</p>
    <button className='buttons button__market' disabled={coin < 5 } onClick={() => setCoinBalance (5, 'cpu')}>Установить</button>
    </div>
    
    <div className='list'>
    <div className='imgMarket'>
      <img src='/img/SoulIcon.png'></img>
      </div>
    <h3 className='title__h3'>Душа</h3>
    <p className='subtitle__h3'>Стоимость: <span>25</span> монет</p>
    <button className='buttons button__market' disabled={coin < 25 } onClick={() => setCoinBalance (25, 'soul')}>Установить</button>
    </div>
  </div>
  
  </div>
</div>
}
export default Market;