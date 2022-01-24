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

//fff
  }

  return <div className="wrapper ">
  <div className='page__number'>
    05
  </div>
  <div className='content'>
    <h2 className='title__h2'>
      Производство
    </h2>
    <div className='list__wrapper'>
      <div className='types'>
        <h3 className='types__title'>Типа биоробота:</h3>
        <div className='types__check'>
          <div className='type__check'>
            <input 
            type="radio" 
            name="type" 
            value="frontend"
            id="front"
            checked={value === 'frontend'}
            onChange={changeHandlerType}></input>
            <label className='types__label' htmlFor="front">FrontEnd</label>
          </div>
          <div className='type__check'>
            <input 
            type="radio" 
            name="type" 
            value="design"
            id="design"
            checked={value === 'design'}
            onChange={changeHandlerType}></input>
            <label className='types__label' htmlFor="design">Design</label>
          </div>
        </div>

        <h3 className='types__title'>Стабилизатор:</h3>
        <div className='types__check'>
          <div className='type__check'>
            <input 
            type="radio" 
            name="gender" 
            value="male"
            id="male"
            checked={value2 === 'male'}
            onChange={changeHandlerGender}></input>
            <label className='types__label' htmlFor="male">Male</label>
          </div>
          <div className='type__check'>
            <input 
            type="radio" 
            name="gender" 
            value="famale"
            id="famale"
            checked={value2 === 'famale'}
            onChange={changeHandlerGender}></input>
            <label className='types__label' htmlFor="famale">Famale</label>
          </div> 
        </div>
        <button className='ccc' disabled={coin < 10 } onClick={() => setCoinBalance (10)}>Произвести за 10 монет</button>
      </div>

      <div className='checkboxes'>
        <div className='checkboxes-device'>
          <input className='checks checkDevice' type="checkbox" name="device"  onChange={check} disabled={!(spares.device.balance >= 1)}></input>
          <input className='checks checkDevice'  type="checkbox" name="device"  onChange={check} disabled={!(spares.device.balance >= 2)}></input>
          <input className='checks checkDevice'  type="checkbox" name="device"  onChange={check} disabled={!(spares.device.balance >= 3)}></input>
          <input className='checks checkDevice'  type="checkbox" name="device"  onChange={(check)} disabled={!(spares.device.balance >= 4)}></input>
        </div>

        <div className='checkboxes-cpu'>
          <input className='checks checkCpu' type="checkbox" name="cpu"  onChange={(check)} disabled={!(spares.cpu.balance >= 1)}></input>
          <input className='checks checkCpu' type="checkbox" name="cpu"  onChange={(check)} disabled={!(spares.cpu.balance >= 2)}></input>
          <input className='checks checkCpu' type="checkbox" name="cpu"  onChange={(check)} disabled={!(spares.cpu.balance >= 3)}></input>
          <input className='checks checkCpu' type="checkbox" name="cpu"  onChange={(check)} disabled={!(spares.cpu.balance >= 4)}></input>
        </div>

        <div className='checkboxes-soul'>
          <input className='checks checkSoul' type="checkbox" name="soul"  onChange={(check)} disabled={!(spares.soul.balance >= 1)}></input>
        </div>
        <div>
          Не хватает <span>{amountSelected.device} биомеханизма</span> , {amountSelected.cpu} процессора, {amountSelected.soul} души и денег
        </div>
        
      </div>
      <div className='imgsRobots'>
        <img className='imgRobot' src='/img/FrontMaleActive.png'></img>
      </div>
      
    </div>
  </div>
</div>
}

export default Production;