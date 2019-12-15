import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tittle from './components/Tittle';
import './index.css';
import Timer   from './components/Timer';
import Slider from './components/Slider';
import Calor from './components/Calor';

class App extends React.Component {
   render(){
      
       return (
        <div className="todo">
            <h1 className="title">
                <Tittle />
            </h1>
            <div>
                <Slider/>
            </div>
            <div className="calore">
                <Calor/>
            </div>
            <div className="timer">
                <h2>
                <Timer/>
                </h2>
            </div>
            <div className="calore2">
                <Calor/>
            </div>
        </div>
       );
   }
}

ReactDOM.render(<App/>, document.getElementById('root'));
export default App;