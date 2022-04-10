//import logo from './logo.svg';
//import './App.css';


import React, { useReducer, useState } from "react";
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import Material from "./components/Material";

import './styles/Material.css'

const formReducer = (state, event) => {
  return {
    ...state, 
    [event.name]: event.value
  }
}

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);
  
  const initialList = {};

  const [list, setList] = React.useState(initialList);
  const [formData, setFormData] = useReducer(formReducer, {
    Menge: 1,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  /*
  function handleAdd() {
    const newList = list.concat({ name, id: uuidv4() });
  
    setList(newList);
  }
  */

  return (
    
    <div className="wrapper">
      <h2>Material Erfassung</h2>
      {submitting &&
        <div>
          <ul id="prodList">
            {Object.entries(formData).map(([name, values]) => (
              <li key={name}><p>{name} : {values.toString()}</p></li>
            ))}
          </ul>
        </div>
      }
      <form id="prodForm" onSubmit={handleSubmit}>
        {//<fieldset>
        }
          <label>
            <p>material</p>
            <select className="selectMaterial" name="Material" onChange={handleChange} value={formData.Material} >
              <option value="">Ein materiell zu wählen</option>
              <option value="Material 1">Material 1</option>
              <option value="Material 2">Material 2</option>
              <option value="Material 3">Material 3</option>
              <option value="Material 4">Material 4</option>
            </select>
          </label>
          <label>
            <input name="Chargen" onChange={handleChange} value={formData.Chargen} />
            <p>chargen-nr.</p>
          </label>
          <label>
            <input type="number" name="Menge" onChange={handleChange} value={formData.Menge} />
            <p>menge</p>
          </label>
        {//</fieldset>
        }
        <button className="buttonForm" type="submit">Speichern</button>
      </form>
    </div>
    
    //<Material />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));