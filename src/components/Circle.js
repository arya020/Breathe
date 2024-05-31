import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  useInterval  from '../hooks/useInterval';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './Circle.css'

const Circle = () =>{


    const [duration,setDuration] = useState(5);
    const [display,setDisplay] = useState("Inhale");
    const [play,setPlay] = useState("paused");
    
    
    useEffect(()=>{
    
    setDuration(duration);
    setPlay("paused");
    setDisplay("Exhale");
    document.getElementById('Circle').style.animationFillMode = "forwards";
    document.getElementById('Circle').style.animationPlayState = "paused";
    
    },[duration]);

    

    useInterval(()=>{
      
        if(display==="Inhale"){
            setDisplay("Exhale");
        }
        else{
            setDisplay("Inhale");
        }
    

    },((duration)*1000));
   
    const increment = () =>{
        setDuration((prevDuration) => prevDuration + 1);
    }

    const decrement = () =>{
        setDuration((prevDuration) => prevDuration - 1);
    }

    const onclick = () =>{

        if(play === "paused"){
            setPlay("running");
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
             
            <div className='circle start 'id='Circle'>
                <p>{play==="running" ? display:"Start"}</p>
            </div>
            <br></br>
            <br></br>
            <br></br>
           <div className='btn-group btn-group-spaced' role='group' aria-label='Button-group'>
            <button onClick={increment} type="button" class="btn btnplus btn-primary col-4">+</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={onclick} type="button" class="btn btnplay btn-primary col-4">
                <i class="bi bi-play"></i>
            </button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={decrement} type="button" class="btn btnsubtract btn-primary col-4">-</button>
            </div>
            <div className='input'>
            <p style={{font:'Monospace', fontSize:'22px'}}>Inhale for {duration}s Exhale for {duration}s</p>
            <br/>
            <p style={{font:'Monospace', fontSize:'12px',paddingLeft:"80px"}}>Created by Arya</p>
            </div>
        </div>
        
  
       
   );


}
export default Circle;