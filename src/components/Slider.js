import React  from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import '../index.css'



function valuetext(value) {
  return `${value}°C`;
}

 export default function Slide(){
   

  return (

    <div className="Slide">
      <Typography id="discrete-slider" gutterBottom>
        Temperatura
      </Typography>
      <h1>
          
      </h1>
      <Slider 
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={100}
      />
    </div>
  );
}