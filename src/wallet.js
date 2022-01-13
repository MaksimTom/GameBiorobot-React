import React, { useState } from 'react';

// import App from './App';
function Wallet({coin, setCoin}) {
  // coin = +coin;
  // console.log(coin);
  const [checked, setChecked] = useState(false);
  function clickCoin(){
    if (checked){
      setCoin(coin + 5)
    } else {
      setCoin(coin + 1)}
  }
	return <div>
    <h2>
    Кошелёк криптовалют
    </h2>
    <div>
      <span>{coin}</span> biorobo монет
      <div className="check">
        <a className="check-link" href="#" onClick={clickCoin} >Нацыганить</a>
        <label className="checkbox-label">
        <input type="checkbox" name="5coins" checked={checked} onChange={() => setChecked(!checked)}></input>
        Цыганить по 5 монет</label>
      </div>
    </div>
  
  </div>
  
}
// export let money = 2;
export default Wallet;