import '../styles/Material.css'

function MaterialList() {
    return (
        <div class="input-button">
            <p class="input-title">material</p>
            <input id="materialInput" list="materialList" name="materialList" placeholder='Wãhlen ein material' />
            <datalist id="materialList">
                <option value="Material 1" />
                <option value="Material 2" />
                <option value="Material 3" />
                <option value="Material 4" />
            </datalist>
            <button>&#x25BC;</button>   
        </div>
    )
}

export default MaterialList;