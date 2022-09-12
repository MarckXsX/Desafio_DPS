import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [Libras, setLibras] = useState(0);
  const [Onzas, setOnzas] = useState(0);
  const [Kilogramos, setKilogramos] = useState(0);
  const [Gramos, setGramos] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
  if(tipo == 1){
  setLibras(total);
  setOnzas((total*16));
  setKilogramos(total*0.453592);
  setGramos(total*453.59)
  }
  else if(tipo ==2){
  setLibras((total/16));
  setOnzas(total);
  setKilogramos((total*0.0283495));
  setGramos(total*28.3495);
  }
  else if(tipo==3){
    setLibras((total*2.2046));
    setOnzas(total*35.2739619);
    setKilogramos((total));
    setGramos(total*1000);
  }

  else if(tipo==4){
    setLibras((total*0.00220465));
    setOnzas(total*0.03527396);
    setKilogramos((total*0.001));
    setGramos(total);
  }
}, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <div className='container-fluid mt-5'>
          <h1>Convertidor de Unidades</h1>

          <p>Libras: {Libras}</p>
          <p>Onzas: {Onzas}</p>
          <p>Kilogramos:{Kilogramos}</p>
          <p>Gramos:{Gramos}</p>
      
          <h3>{total}</h3>
      </div>
      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Libras</option>
        <option value={2}>Onzas</option>
        <option value={3}>Kilogramos</option>
        <option value={4}>Gramos</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;

