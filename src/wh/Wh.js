import { useState } from 'react';
import './Wh.css';
import { Input } from './Input';
import { Counter } from './Count';

export function Bop () { 
  const [ curentCp, setCurentCp ] = useState(0);
  const [ primaryVp, setPrimaryVp  ] = useState(0);
  const [ secondaryVp, setSecondaryVp] = useState(0);
  const [ secondaryVp2, setSecondaryVp2] = useState(0);
  const [ secondaryVp3, setSecondaryVp3] = useState(0);

  const totalVp = secondaryVp + secondaryVp2 + secondaryVp3 + primaryVp;
  
  return (
    <div className="box">
      <p className="words" style={{fontSize:"28px"}}>Faction: <Input name ="Name"/></p>
      <p className="words" style={{fontSize:"35px"}}>CP: <Counter setValue={setCurentCp} value={curentCp}/></p>
      <p className="words" style={{fontSize:"35px"}}> VP: {totalVp} </p>
      <p className="words" style={{fontSize:"28px",marginBottom:"16px"}}>Primary: <Counter step={5} setValue={setPrimaryVp} value={primaryVp}/></p>
      <ul style={{listStyle:"none",padding: "0"}} >
        <li>
          <p className="words" style={{fontSize:"28px",marginBottom:"1px",marginTop:"5px"}}><Input name ="Secondary 1:"/> <Counter setValue={setSecondaryVp} value={secondaryVp}/></p>
          <p className="words" style={{fontSize:"28px",marginBottom:"1px",marginTop:"5px"}}><Input name ="Secondary 2:"/> <Counter setValue={setSecondaryVp2} value={secondaryVp2}/></p>
          <p className="words" style={{fontSize:"28px",marginBottom:"1px",marginTop:"5px"}}><Input name ="Secondary 3:"/> <Counter setValue={setSecondaryVp3} value={secondaryVp3}/></p>
        </li>
      </ul>
    </div>
  )
}