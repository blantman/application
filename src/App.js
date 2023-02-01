import { Bop } from './wh/Wh';
import './wh/Wh.css';
import { General } from './wh/Heder';

function App() {
  return (
    <div className="App">
      <div className="General">
        <General />
      </div >
      <div className="Blocks">
        <Bop />
        <Bop />
      </div>
    </div>
  )
}

export default App;
