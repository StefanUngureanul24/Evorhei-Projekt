function MaterialList() {
    return (
        <div>
            <p>material</p>
            <input list="materialList" name="materialList" placeholder='Wãhlen ein material' />
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