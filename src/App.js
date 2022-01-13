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
    [ { name: 'Биомеханизм', buy: 7, sale: 5, balance: 0},
    { name: 'Процессор', buy: 5, sale: 3, balance: 0},
    { name: 'Душа', buy: 25, sale: 15, balance: 0}
  ]);
  const imgSpares = {
    device: {
      disable: 'img/mehDesable.png',
      enable: 'img/mehEnable.png',
      active: 'img/mehActive.png'
  },
    cpu: {
        disable: 'img/CpuDesable.png',
        enable: 'img/CpuEnable.png',
        active: 'img/CpuActive.png'
    },
    soul: {
        disable: 'img/SoulDesable.png',
        enable: 'img/Soul.png',
        active: 'img/SoulActive.png'
    }

}
	return <div>
		<Header />
    {/* <Spares /> */}
    <Wallet coin={coin} setCoin={setCoin} />
    <Market coin={coin} setCoin={setCoin} balance={balance} setBalance={setBalance} spares={spares} setSpares={setSpares}/>
    <Stock coin={coin} setCoin={setCoin} spares={spares} setSpares={setSpares}/>
    <Production coin={coin} setCoin={setCoin} imgSpares={imgSpares}/>
	</div>
}

export default App;
