import React, { useState } from 'react';
function Production({coin, setCoin, imgSpares}){
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

  const [imgStatus, setImgStatus] = useState(imgSpares.device.disable);
 
  
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
  
  <img src={imgStatus}
  onClick={() => setImgStatus(imgSpares.device.active)}></img>
  <img src={imgSpares.device.disable}></img>
  <img src={imgSpares.device.disable}></img>
  <img src={imgSpares.device.disable}></img>

  <button disabled={coin < 10 } onClick={() => setCoinBalance (10)}>Произвести за 10 монет</button>
  </div>
}

export default Production;