import React, { useState, useEffect } from 'react';
import {
  CSSTransition,
} from 'react-transition-group';
import logo from './images/train.png';
import './App.css';
import './css/icons.css';
import Introduction from './pages/Introduction';
import Philosophy from './pages/Philosophy';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Clients from './pages/Clients';
function App() {
  const [count, setCount] = useState(0);
  const [showPage, setShowPage] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [trainMargin, setTrainMargin] = useState(0);
  const [menuStatus, setMenuStatus] = useState('close');
 const steamMargin = 13;
  const pages = [
    Introduction,
    Philosophy,
    Skills,
    Projects,
    Clients,
    Contact
  ]

  const changeClass = (index) => {
    if(index !== currentPage){
      setCurrentPage(index);   
      setShowPage(!showPage);
  }
    menuButtonToggle();

  };
const menuButtonToggle = ()=>setMenuStatus(menuStatus === 'open' ? 'close' : 'open');
  return (
    <div className="App"    >
      <div className='pageContainer'>
        <CSSTransition
          in={showPage}
          timeout={300}
          classNames="container"
          onExited={() => {
            const pageWidth = 80;
            const pagesCount = pages.length;
            const distancePerEachPage = parseInt(pageWidth / (pagesCount - 1));

            setTrainMargin(((count + 1) % pagesCount) * distancePerEachPage);
            
            setCount(currentPage);

            setShowPage(!showPage);

          }}
          unmountOnExit
        >
          {pages[parseInt(count)]}
        </CSSTransition>
      </div>
      <footer className="bg-light">
      <nav id="bt-menu" className={"bt-menu bt-menu-" + menuStatus}>
				<a href="#" className="bt-menu-trigger" onClick={menuButtonToggle}><span>Menu</span></a>
				<ul>
					<li><a href="#"  onClick={()=>{changeClass(0)}} className="bt-icon icon-user-outline">About</a></li>
					<li><a href="#"  onClick={()=>{changeClass(1)}} className="bt-icon icon-sun">Skills</a></li>
					<li><a href="#"  onClick={()=>{changeClass(2)}} className="bt-icon icon-windows">Work</a></li>
					<li><a href="#"  onClick={()=>{changeClass(3)}} className="bt-icon icon-speaker">Blog</a></li>
					<li><a href="#"  onClick={()=>{changeClass(4)}} className="bt-icon icon-star">Clients</a></li>
					<li><a href="#"  onClick={()=>{changeClass(5)}} className="bt-icon icon-bubble">Contact</a></li>
				</ul>
			</nav>
      </footer>
    </div>
  );
}

export default App;
