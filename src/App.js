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
  useEffect(() => {

    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;

  });
  const changeClass = () => {
    setShowMessage(!showMessage);

  };
  // const setDirection = ({ keyCode }) => {
  //   // Horizontal keys
  //   if(keyCode === 37 || keyCode === 39){
  //     changeClass();
  //   }
  //  };
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
            console.log(count, count + 1, ((count + 1) % pagesCount))
            setCount((count + 1) % pages.length);

            setShowMessage(!showMessage);

          }}
          unmountOnExit
        >
          {pages[parseInt(count)]}
        </CSSTransition>
      </div>
      <footer>
        <CSSTransition
          in={showMessage}
          timeout={300}
          classNames="train"
         
          unmountOnExit
        >

          <img src={logo} onClick={changeClass} className="train" style={{ marginLeft: trainMargin + 'vw' }} alt="logo" />
        </CSSTransition>
      </footer>
    </div>
  );
}

export default App;
