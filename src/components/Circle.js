import React,{useEffect, useState} from 'react';
import './circle.css';
import  useInterval  from '../hooks/useInterval';


const Circle = () =>{

    const [duration,setDuration] = useState(5);
    const [display,setDisplay] = useState("Exhale");
    
    useEffect(()=>{
    
    setDuration(duration);
    document.getElementById('Circle').style.animationDuration = (duration*1.9) +"s";
    
    },[duration]);

    useInterval(()=>{

            setDuration(duration);
            if(display==="Inhale"){
                setDisplay("Exhale");
            }
            else{
                setDisplay("Inhale");
            }
        
    },(duration*1000));
   
    const handleChange= (event) => {
        setDuration(event.target.value);
    }

    const increment = () =>{
        setDuration((prevDuration) => prevDuration + 1);
    }

    const decrement = () =>{
        setDuration((prevDuration) => prevDuration - 1);
    }


    return(
    <div className='container'>
        <div id={'Circle'} className={'circle start'}>
            <p className='text'>{display}</p>
        </div>

        {/* write the onclick event before classname*/}
        <button onClick={increment} className='plus' value={duration} >+</button>
        <button onClick={decrement} className='subtract' value={duration}>-</button>
        
       <div className='input'>
        <p style={{font:'Monospace', fontSize:'22px',color:' rgb(30, 66, 69)'}}>Inhale for {duration}s Exhale for {duration}s</p>
        <p style={{font:'Monospace', fontSize:'12px',paddingLeft:"78px"}}>Created by Arya</p>
        </div>
    </div>
       
    );


}
export default Circle;