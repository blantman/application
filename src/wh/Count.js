export function Counter(props) {
  const {step=1, value, setValue} = props

  function handleClick(e) {
    let nextValue = value;
    if (e.shiftKey) {
      nextValue = nextValue - step;   
    }
    else {
      nextValue = nextValue + step;
    }
    setValue(nextValue)
  }

  return(
    <span className="counter" onClick = {handleClick}>{value}</span>
  )
}


