import React, { DiscreteSlider } from 'react';
import ReactDOM from 'react-dom'
import Slider from './Slider'
import style from '../index.css'
import { bgcolo } from '@material-ui/system';
import { red, green } from '@material-ui/core/colors';


export default class Calor extends React.Component {
    state = {
        value: 50,
      }
    
    
      handleOnChange = (e) => this.setState({ value: e.target.value })
  render(){
      return(
          <div>Calor: <br></br>
          <div style={this.state.value <= 50 ? {color: '#81F746'} : {color: '#F74646'}} color={this.props.color}>
          <input type="range" min={0} max={100} value={this.state.value} className="slider" onChange={this.handleOnChange} />
          <div className="value">{this.state.value}</div>
          </div>
          </div>
      )
  }
}

