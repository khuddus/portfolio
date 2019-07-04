import React, { useState, useEffect } from 'react';
import {
  CSSTransition,
} from 'react-transition-group';
import logo from './images/train.png';
import './App.css';
import Introduction from './pages/Introduction';
import Philosophy from './pages/Philosophy';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
function App() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(true);
  const [trainMargin, setTrainMargin] = useState(0);

  const pages = [
    Introduction,
    Philosophy,
    Skills,
    Projects,
    Contact
  ]
  
  const changeClass = () => {
    setShowMessage(!showMessage);

  };
 
  return (
    <div className="App"  onClick={changeClass}  >
      <div className='pageContainer'>
        <CSSTransition
          in={showMessage}
          timeout={300}
          classNames="container"
          onExited={() => {
            const pageWidth = 80;
            const pagesCount = pages.length;
            const distancePerEachPage = parseInt(pageWidth / (pagesCount - 1));
            
            setTrainMargin(((count + 1) % pagesCount) * distancePerEachPage);
            setCount((count + 1) % pages.length);

            setShowMessage(!showMessage);

          }}
          unmountOnExit
        >
          {pages[parseInt(count)]}
        </CSSTransition>
      </div>
      <footer className="bg-light">
        <CSSTransition
          in={showMessage}
          timeout={300}
          classNames="train"
         
          unmountOnExit
        >
<div>
<div class="steam" id="steam-one"  style={{ marginLeft: (trainMargin + 12) +  'vw' }}></div>
  <div class="steam" id="steam-two" style={{ marginLeft: (trainMargin + 12) + 'vw' }}></div>
  <div class="steam" id="steam-three" style={{ marginLeft: (trainMargin + 12) + 'vw' }}></div>
  <div class="steam" id="steam-four" style={{ marginLeft: (trainMargin + 12) + 'vw' }}></div>
   <img src={logo} onClick={changeClass} className="train" style={{ marginLeft: trainMargin + 'vw' }} alt="logo" />

</div>
                 </CSSTransition>
      </footer>
    </div>
  );
}

export default App;
