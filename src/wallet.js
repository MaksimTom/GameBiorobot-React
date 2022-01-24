import React, { useState } from 'react';

// import App from './App';
function Wallet({coin, setCoin}) {
  // coin = +coin;
  // console.log(coin);
  const [checked, setChecked] = useState(false);
  function clickCoin(event){
    event.preventDefault();
    if (checked){
      (coin + 5) > 100 ?  alert ('lot') : setCoin(coin + 5);
    } else {
      (coin + 1) > 100 ?  alert ('lot') : setCoin(coin + 1);}

  }

  function imgCoin(){
    const arr = [];
	  for (let i = 1; i <= coin; i++) {
		arr.push(<img key={i} className='coin' src='/img/coin.png'></img>);
	}
	return <>{arr}</>
	
  }  

	return <div className="wrapper ">
    <div className='page__number'>
      02
    </div>
      <div className='content'>
    <h2 className='title__h2'>
    Кошелёк криптовалют
    </h2>
    <div>
      <div className='coins'>
        {imgCoin()}
      </div>
      <p className='coins__text'>
      <span className='coins__num'>{coin}</span> biorobo монет
      </p>
      <div className="check">
        <a className="check-link"  onClick={clickCoin} >Нацыганить</a>
        <label className="checkbox-label">
        <input type="checkbox" name="5coins" checked={checked} onChange={() => setChecked(!checked)}></input>
        Цыганить по 5 монет</label>
      </div>
    </div>
    </div>
  </div>
  
}
// export let money = 2;
export default Wallet;