import React, { useState } from 'react';
function Production({coin, setCoin, spares, setSpares, imgStatus, setImgStatus}){
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  function changeHandlerType(event) {
		setValue(event.target.value);
	}
  function changeHandlerGender(event) {
		setValue2(event.target.value);
    
	}

  function setCoinBalance (price){
    setCoin(coin - price);
   
  }

  
  function chengeImg(){
    if (imgStatus == spares.device.img.enable){
      setImgStatus(spares.device.img.active)} else 
    {if (imgStatus == spares.device.img.active){
      setImgStatus(spares.device.img.enable)}}
  }

const [amountSelected, setAmountSelected] = useState(
  {device: 4, cpu: 4, soul: 1});

  function check(event) {
    const copy = Object.assign({}, amountSelected)
     if (event.target.checked) {
      event.target.checked = true;
      copy[event.target.name]--
    } else {
      event.target.checked = false;
      copy[event.target.name]++;
    }
    setAmountSelected(copy);
  };
  if (amountSelected.device < 1){


  }
  return <div>
  <h2>
    Производство
  </h2>
  <p>Типа биоробота:</p>
  <input 
  type="radio" 
  name="type" 
  value="frontend"
  id="front"
  checked={value === 'frontend' ? true : false}
	onChange={changeHandlerType}></input>
  <label htmlFor="front">FrontEnd</label>
  <input 
  type="radio" 
  name="type" 
  value="design"
  id="design"
  checked={value === 'design' ? true : false}
	onChange={changeHandlerType}></input>
  <label htmlFor="design">Design</label>

  <p>Стабилизатор:</p>
  <input 
  type="radio" 
  name="gender" 
  value="male"
  id="male"
  checked={value2 === 'male' ? true : false}
	onChange={changeHandlerGender}></input>
  <label htmlFor="male">Male</label>

  <input 
  type="radio" 
  name="gender" 
  value="famale"
  id="famale"
  checked={value2 === 'famale' ? true : false}
	onChange={changeHandlerGender}></input>
  <label htmlFor="famale">Famale</label>
  

  <p>
<input type="checkbox" name="device"  onChange={check} disabled={!(spares.device.balance >= 1)}></input>
<input type="checkbox" name="device"  onChange={check} disabled={!(spares.device.balance >= 2)}></input>
<input type="checkbox" name="device"  onChange={check} disabled={!(spares.device.balance >= 3)}></input>
<input type="checkbox" name="device"  onChange={(check)} disabled={!(spares.device.balance >= 4)}></input>
</p>
<p>
<input type="checkbox" name="cpu"  onChange={(check)} disabled={!(spares.cpu.balance >= 1)}></input>
<input type="checkbox" name="cpu"  onChange={(check)} disabled={!(spares.cpu.balance >= 2)}></input>
<input type="checkbox" name="cpu"  onChange={(check)} disabled={!(spares.cpu.balance >= 2)}></input>
<input type="checkbox" name="cpu"  onChange={(check)} disabled={!(spares.cpu.balance >= 2)}></input>
</p>

<p><input type="checkbox" name="soul"  onChange={(check)} disabled={!(spares.soul.balance >= 1)}></input>
</p>
<p>
  Не хватает <span>{amountSelected.device} биомеханизма</span> , {amountSelected.cpu} процессора, {amountSelected.soul} души и денег
</p>
  <button disabled={coin < 10 } onClick={() => setCoinBalance (10)}>Произвести за 10 монет</button>
  </div>
}

export default Production;