import React, { DiscreteSlider } from 'react';
import ReactDOM from 'react-dom'
import '../index.css'
import { bgcolor } from '@material-ui/system';
import { red } from '@material-ui/core/colors';



export default class Calor extends React.Component {

    handleChange(e){
        const calore = e.target.value;
        this.props.changeTitle(calore);
    }
    
    render(props){
        return (
            
            <div>
                <input className="textoCalore" id="texcal" type="text"></input>
            </div>
        );
    }
}
