import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tittle from './components/Tittle';
import './index.css';
import Timer   from './components/Timer';
import Slider from './components/Slider';
import Calor from './components/Calor';
import Calore from './components/Slider'


class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
      }
    
   render(){
        const valuetext = this.props.valuetext;

       return (
        <div className="todo">
            <h1 className="title">
                <Tittle/>
            </h1>
            <div>
                <Slider />
            </div>
            <div >
                <Calor />
            </div>
            <div className="timer">
                <h2>
                <Timer/>
                </h2>
            </div>
        </div>
       );
   }
}

ReactDOM.render(<App/>, document.getElementById('root'));
export default App;