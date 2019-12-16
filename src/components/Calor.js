import React, { DiscreteSlider } from 'react';
import ReactDOM from 'react-dom'
import Slider from './Slider'
import '../index.css'
import { bgcolor } from '@material-ui/system';
import { red } from '@material-ui/core/colors';



export default class Calor extends React.Component {
    
    
      handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
      }
    render(props){
        return (    
            <div>
                <label>Calor:</label><br/>
                <label id="calore" className="caloreVerde">
                    0
                </label>
            </div>
        );
    }
}
