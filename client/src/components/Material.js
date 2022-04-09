import '../styles/Material.css'

function Material() {
    return (
        <div>
            <h2>Material Erfassung</h2>
            
            <p>material</p>
            <input list="materialList" name="materialList" />
            <datalist id="materialList">
                <option value="Material 1"/>
                <option value="Material 2"/>
                <option value="Material 3"/>
            </datalist>

            <input type="text" id="chargeInput" name="charge" /> 
            <p>chargen-nr.</p>

            <input type="number" id="mengeInput" name="menge" />
            <p>menge</p>
        
            <button>speichern</button>
        </div>
    )
}

export default Material;