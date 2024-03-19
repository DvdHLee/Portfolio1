import React from 'react';

import './Phone.css';

const Phone = props => {
    return (
        <div className="phone">
            <div className="speaker"></div>
            <div className="screen">
                <p className="phonetitle">Projects</p>
                <div className="appsrow">
                    <div className="app">
                        <div id="mcapp">
                            <img id="mcappimg" src="./assets/Icons/mclogo.png" alt="mc logo"></img>
                        </div>
                    </div>
                    <div className="app">
                        <div id="portapp">
                            <img id="portappimg" src="./assets/Icons/portfolio.svg" alt="mc logo"></img>
                        </div>
                    </div>
                </div>
                <div className="appsrow">
                    <div className="app">
                        <div id="a4aapp">
                            <img id="a4aappimg" src="./assets/Icons/africair.png" alt="africair logo"></img>
                        </div>
                    </div>
                    <div className="app">
                        <div id="whoapp">
                            <img id="whoappimg" src="./assets/Icons/spotifylogo.png" alt="spotify logo"></img>
                        </div>
                    </div>
                </div>
                <div className="appsrow">
                    <div className="app">
                        <div id="appicon">
                            <img id="appicon" src="./assets/Icons/ttticon.png" alt="tic tac toe logo"></img>
                        </div>
                    </div>
                    <div className="app">
                        <div id="appicon">
                            <img id="appicon" src="./assets/Icons/moreorlessicon.PNG" alt="more or less logo"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="screencover">
                <div className="applinkspacer">
                    <div className="appsrow">
                        <a href="https://arizonacoderz.github.io/meal-chewser/" className="app" title="" target="_blank" rel="noreferrer noopener"><div></div></a>
                        <a href="https://github.com/DvdHLee/Portfolio" className="app" title="" target="_blank" rel="noreferrer noopener"><div></div></a>
                    </div>
                    <div className="appsrow">
                        <a href="https://drive.google.com/file/d/16ws097UPsKGsoiWp0mY3CRUhREOfvSxP/view?usp=sharing" className="app" title="" target="_blank" rel="noreferrer noopener"><div></div></a>
                        <a href="https://whos-who.vercel.app/" className="app" title="" target="_blank" rel="noreferrer noopener"><div></div></a>
                    </div>
                    <div className="appsrow">
                        <a href="https://dvdhlee.github.io/TicTacToe/" className="app" title="" target="_blank" rel="noreferrer noopener"><div></div></a>
                        <a href="https://dvdhlee.github.io/Moreorless/" className="app" title="" target="_blank" rel="noreferrer noopener"><div></div></a>
                    </div>
                </div>
            </div>
            <div className="homebutton"></div>
        </div>
    )
}

export default Phone;