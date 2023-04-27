import React ,{useState} from 'react'
import "./ColoredInput.css";

const ColoredInput = (props) => {

    const [activeColor,setActiveColor] = useState('');
    const defaultText = "Type any color of your choice!"
    const changeColorHandler = (event) => {
        const colorInput = event.target.value.trim();
        setActiveColor(colorInput);
        props.changeColor(colorInput);
    };
     

  return (
    <div className='input-config'> 
        <input value={activeColor} id='input' type='text' onChange={changeColorHandler} placeholder={defaultText}/>
    </div>
  )
}


export default ColoredInput;