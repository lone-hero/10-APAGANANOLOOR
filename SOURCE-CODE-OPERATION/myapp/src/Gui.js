import React, {useState} from 'react';
import './App.css';
import './Button.css';
import Appa from './Appa';

const GUI = () => {
    
    var [isRed, setRed] = useState('');
    var [temp,istemp] = useState(0);
  
    var update = e => {
      setRed(e.target.value);
      istemp(0);
  };
  
    var click =()=>{
      istemp(0+1);
    };
 
    return(
        <div className="App">
            <header className="App-header">
                <br></br>Operation-Compiler        
            </header>

            <header className="inline-div">
                <textarea 
                    cols="75" 
                    type="code" 
                    placeholder="Input Your Code Here:" 
                    className="inline-txtarea"
                    value={isRed}
                    onChange={update}>   
                </textarea>
                    
                <button className="Button.css" onClick={click}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Run
                </button>
                
            </header>

            <Appa isRed={isRed} temp={temp}/>

        
        </div>
    );
}
export default GUI;