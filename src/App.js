import React, { useState } from 'react';
import Header from './Header';
import Wallet from './wallet';
import Market from './market';
import Stock from './stock';
import Production from './production';

function App() {
  const [coin, setCoin] = useState(0);
  const [balance, setBalance] = useState(0);
  const [spares, setSpares] = useState(
    {  device:{
        buy: 7, 
        sale: 5, 
        balance: 10,
        img:{
          disable: 'img/mehDesable.png',
          enable: 'img/mehEnable.png',
          active: 'img/mehActive.png'
        }},
      cpu:{
        buy: 5, 
        sale: 3, 
        balance: 10},
        soul: { 
        buy: 25, 
        sale: 15, 
        balance: 10}
     });
  const [imgStatus, setImgStatus] = useState (spares.device.img.disable);
 
	return <div>
		<Header />
    {/* <Spares /> */}
    <Wallet coin={coin} setCoin={setCoin} />
    <Market coin={coin} setCoin={setCoin} balance={balance} setBalance={setBalance} spares={spares} setSpares={setSpares} setImgStatus={setImgStatus}/>
    <Stock coin={coin} setCoin={setCoin} spares={spares} setSpares={setSpares} setImgStatus={setImgStatus}/>
    <Production coin={coin} setCoin={setCoin} spares={spares} setSpares={setSpares} imgStatus={imgStatus} setImgStatus={setImgStatus}/>
	</div>
}

export default App;
