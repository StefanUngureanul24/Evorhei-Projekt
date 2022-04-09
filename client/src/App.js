//import logo from './logo.svg';
//import './App.css';


import React, { useReducer, useState } from "react";
import ReactDOM from 'react-dom';
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
  
  const [formData, setFormData] = useReducer(formReducer, {});
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

  return (
    
    <div className="wrapper">
      <h1>Material Erfassung</h1>
      {submitting &&
        <div>
          <ul id="prodList">
            {Object.entries(formData).map(([name, values]) => (
              <li key={name}><p>{name}:{values.toString()}</p></li>
            ))}
          </ul>
        </div>
      }
      <form id="prodForm" onSubmit={handleSubmit}>
        {//<fieldset>
        }
          <label>
            <p>material</p>
            <select name="Material" onChange={handleChange}>
              <option value="">Ein materiell zu wählen</option>
              <option value="mat1">Material 1</option>
              <option value="mat2">Material 2</option>
              <option value="mat3">Material 3</option>
              <option value="mat4">Material 4</option>
            </select>
          </label>
          <label>
            <input name="Chargen" onChange={handleChange} />
            <p>chargen-nr.</p>
          </label>
          <label>
            <input type="number" name="Menge" onChange={handleChange} />
            <p>menge</p>
          </label>
        {//</fieldset>
        }
        <button type="submit">Speichern</button>
      </form>
    </div>
    
    //<Material />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));