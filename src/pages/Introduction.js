import React from 'react';
import './Introduction.css';
import developer1 from '../images/developer1.png';
import nodejs from '../images/nodejs.png';
import yii from '../images/yii.png';
import php from '../images/php.png';
import react from '../images/react.png';
import android from '../images/android.png';
import springboot from '../images/springboot.png';

function Introduction() {
    document.title = "Abdul Khuddus - A full stack engineer"
    return (

        <div className="page1">

            <div className="introduction">
                <header className="App-header color-super-light">
                    <div className='row'>
                        <div>

                            <div className='intro'>
                                <h1 className="intro-heading">Abdul Khuddus</h1>
                                <h3 className="intro-heading-sub color-dark">-- A Full stack engineer --</h3>
                                <h2 className="post-intro color-light">
                                <code>
                                        {"<skills>"}                                           
                                    </code>
                                    <span className="skills-row">
                                    <img className = 'intro-skill-image'   src={nodejs} alt="Skilled in node js"/>
                                    <img className = 'intro-skill-image' src={react} alt="Skilled in react js"/>
                                    <img className = 'intro-skill-image' src={android} alt="Skilled in Android"/>
                                    <br/>
                                    <br/>
                                    <img className = 'intro-skill-image' src={php} alt="Skilled in PHP"/>
                                    <img className = 'intro-skill-image'   src={yii} alt="Skilled in Yii2"/>
                                    <img className = 'intro-skill-image'   src={springboot} alt="Skilled in Spring boot"/>
                                    </span>
                                     <code>
                                        {"</skills>"}                                        
                                    </code>
                                    
                                </h2>
                            </div>
                            
                        </div>
                        <div>
                            <img className="intro-image" alt='Abdul Khuddus - A full stack developer' src={developer1} />
                        </div>

                    </div>

                </header>
                
            </div>


        </div>
    );
}

export default Introduction;
