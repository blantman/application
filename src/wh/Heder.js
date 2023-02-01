import { useState } from 'react';
import './Wh.css';
import { Input } from './Input';
import { Counter } from './Count';

export function General() {
  const[ round, setRound] = useState(0);

  return(
    <div className="heder">
      <h1 style={{cursor:"pointer", fontSize:"35px",marginTop:"28px"}}><Input name="Mission"/> </h1>
      <h2 className="words" style={{fontSize:"45px",marginTop:"5px"}}>Round: <Counter setValue={setRound} value={round}/></h2>
    </div>
  )
}