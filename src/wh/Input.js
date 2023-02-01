import { useState } from 'react';

export function Input (props) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setIsValue] = useState('');
  const {name="Type here"} = props 

  function handleClick () {
      setIsEdit(!isEdit);
  }

  function handleChange (e) {
    setIsValue(e.target.value);
  } 

  return (
    isEdit ?<input type='text' autoFocus value = {value} onChange = {handleChange} onBlur={handleClick}/>
      : <span  onClick = {handleClick}>{ value || name }</span>
  )
}