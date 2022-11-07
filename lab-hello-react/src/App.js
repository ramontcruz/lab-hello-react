import React from 'react';
///src/App.js
//import ironhacklogoxs from "./images/ironhack-logo-xs.png";
//import menutopxs from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import './App.css';
import TopImages from './components/TopImages';
import PropsTest from './components/PropsTest';

function App() {
  return (
   
    <div className="App">
      
      
      <div class="container bkg-1 mt-3 pt-2">
      
       <TopImages/> 
      
       <div class="row justify-content-between mb-2">
          <div class="col-4">
            <h1 className='Text-default'>Say Hello to React JS</h1>
            <p className='Text-default'>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
          </div>
          <div class="col-4">
          </div>
       </div>

       <div class="row justify-content-between mb-2">
          <div class="col-4">
            <button type="button" class="btn btn-light">Awesome!</button>
          </div>
          <div class="col-4">
          </div>
        </div>

        <div class="row bkg-2">
          
          <PropsTest imagem={icon1}/>

          <div class="col">
          <img  src={icon2} alt="icon 2"/> 
            <h1>Declarative</h1>
            <p className='Text-icon'>React Make it painless to create interactive UIs</p>
          </div>

          <div class="col">
          <img  src={icon3} alt="icon 3"/> 
            <h1>Declarative</h1>
            <p className='Text-icon'>React Make it painless to create interactive UIs</p>
          </div>

          <div class="col">
          <img  src={icon4} alt="icon 4"/> 
            <h1>Declarative</h1>
            <p className='Text-icon'>React Make it painless to create interactive UIs</p>
          </div>
        </div>

       


       </div>   
    </div>
    
  );
}
export default App;