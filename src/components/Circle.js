import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  useInterval  from '../hooks/useInterval';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

const Circle = () =>{


    const [duration,setDuration] = useState(5);
    const [display,setDisplay] = useState("Inhale");
    const [play,setPlay] = useState("paused");
    
    
    useEffect(()=>{
    
    setDuration(duration);
    setPlay("paused");
    setDisplay("Inhale");
    document.getElementById('Circle').style.animationFillMode = "forwards";
    document.getElementById('Circle').style.animationPlayState = "paused";
    document.getElementById('Circle').style.animationDuration = (duration*2) +"s";
    
    },[duration]);

    

    useInterval(()=>{
      
        if(display==="Inhale"){
            setDisplay("Exhale");
        }
        else{
            setDisplay("Inhale");
        }
    

    },play === "running" ? (duration * 1000) : null);

    const increment = () =>{
        setDuration((prevDuration) => prevDuration + 1);
    }

    const decrement = () =>{
        setDuration((prevDuration) => prevDuration - 1);
    }

    const onclick = () =>{

        if(play === "paused"){
            setPlay("running");
            //setDisplay("Wait");
            document.getElementById('Circle').style.animationFillMode = "forwards";
            console.log(document.getElementById('Circle').style.animationFillMode)
            document.getElementById('Circle').style.animationPlayState ="running";
            document.getElementById('Circle').style.animationDuration = (duration*2) +"s";
        }
        else{
            setPlay("paused");
            document.getElementById('Circle').style.animationPlayState = "paused";

        }
    }

   

    return(
        <div className='container-fluid'>
             
            <div className='circle start' id='Circle'>
                <p>{play==="running" ? display:"Start"}</p>
            </div>
            <br></br>
            <br></br>
            <br></br>
           <div className='btn-group btn-group-spaced' role='group' aria-label='Button-group'>
            <button onClick={increment} type="button" class="btn btnplus btn-primary col-4 " style={{width: '3em'}}>+</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={onclick} type="button" class="btn btnplay btn-primary col-4">
                { play !== "running" ? <i class="bi bi-play"></i> : <i class="bi bi-pause"></i> }
            </button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={decrement} type="button" class="btn btnsubtract btn-primary col-4" style={{width: '3em'}}>-</button>
            </div>
            <div className='input'>
            <p style={{font:'Monospace', fontSize:'22px'}}>Inhale for {duration}s Exhale for {duration}s</p>
            <br/>
            </div>
        </div>
        
  
       
   );


}
export default Circle;