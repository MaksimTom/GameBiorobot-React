import React, { useState } from 'react';
function Market ({coin, setCoin, spares, setSpares, setImgStatus}){
  let price = 6;
  const [disabled, setDisabled] = useState(true);


  function setCoinBalance (price, name){
    setCoin(coin - price);
    const copy = Object.assign({}, spares);
    copy[name].balance ++;
    copy[name].balance == 0 ? setImgStatus (spares[name].img.disable) : setImgStatus(spares[name].img.enable);
    setSpares(copy);
  }

return <div>
  <h2>
    Рынок комплектующих
  </h2>

  <h3>Биомеханизм</h3>
  <p>Стоимость: <span>7</span> монет</p>
  <button disabled={coin < 7 } onClick={() => setCoinBalance (7, 'device')} >Установить</button>

  <h3>Процессор</h3>
  <p>Стоимость: <span>5</span> монет</p>
  <button disabled={coin < 5 } onClick={() => setCoinBalance (5, 'cpu')}>Установить</button>

  <h3>Душа</h3>
  <p>Стоимость: <span>25</span> монет</p>
  <button disabled={coin < 25 } onClick={() => setCoinBalance (25, 'soul')}>Установить</button>
  
</div>
}
export default Market;