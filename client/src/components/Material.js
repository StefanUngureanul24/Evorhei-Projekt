import * as React from 'react';

import MaterialList from './MaterialList';
import Chargen from './Chargen';
import Menge from './Menge';
import Speichern from './Speichern';

import '../styles/Material.css'

function Material() {
    return (
        <div>
            <h2>Material Erfassung</h2>
            
            {
                // MaterialList component
            }
            {/*
            <p>material</p>
            <input list="materialList" name="materialList" placeholder='Wãhlen ein material' />
            <datalist id="materialList">
                <option value="Material 1" />
                <option value="Material 2" />
                <option value="Material 3" />
                <option value="Material 4" />
            </datalist>
            <button>&#x25BC;</button>
            */}
            <MaterialList />

            {
                // Chargen component 
            }            
            {/*
            <input type="text" id="chargeInput" name="charge" /> 
            <p>chargen-nr.</p>
            */}
            <Chargen />

            {
                // Menge component 
            }
            {/*
            <input type="number" id="mengeInput" name="menge" />
            <p>menge</p>
            */}
            <Menge />

            {
                // Speichern component
            }
            {
            //<button>speichern</button>
            }
            <Speichern />
        </div>
    )
}

export default Material;