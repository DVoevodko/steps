import { useState } from "react";
import {TableDist} from './TableDist';

export function Steps() {
    const[steps,setSteps]=useState(
        [{date:'01.01.2024', dist:1},
         {date:'02.01.2024', dist:1.5},
         {date:'03.01.2024', dist:2},
         {date:'05.01.2024', dist:1},
        ]
    );
    const[inputs,setInputs]=useState(
      {inpDate:'01.01.2024', inpDist:'0'}
    );
    const handleSubmit = (e) => {
      e.preventDefault();
      //console.log('submit',inputs.inpDate,inputs.inpDist);
      var arraySteps = [], isNew = true;
      //console.log('submit steps 0',arraySteps,inputs);
      for (let step of steps) {
        //console.log('step', step);
        if (step.date === inputs.inpDate) {
          arraySteps.push({date:step.date, dist:step.dist + Number(inputs.inpDist)});
          isNew = false;
        } else {
          arraySteps.push({date:step.date, dist:step.dist});
        }
      }
      if (isNew) arraySteps.push({date:inputs.inpDate, dist:Number(inputs.inpDist)});
      setSteps(arraySteps);
    }
    const handleChange = ({target}) => {
      const {name, value} = target;
      setInputs(prevInput =>({...prevInput, [name]: value}));
    }
    const handleDelete = (delDate) => {
      setSteps(steps.filter(item => item.date !== delDate));
      //console.log('del',delDate);
    }
    
    return (
    <div style={{textAlign: "center"}}>
    <form onSubmit={handleSubmit}>
      <div>
      <input id="inpDate" name="inpDate" value={inputs.inpDate} onChange={handleChange}/>
      <input id="inpDistance" name="inpDist" value={inputs.inpDist} onChange={handleChange}/>
      <input className='btn' type = 'submit' value="ОК"/>
      </div>
    </form>
    <TableDist steps = {steps} onDelete = {(delDate) => {handleDelete(delDate)}}/>
    </div>
    )
}