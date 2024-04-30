
const SelectOptionInput = ({tag, title,value1, value2, id, name, onChange}) => {
    return(
        <div className="flex flex-col w-5/6">   
            <label className="mb-2 font-semibold" htmlFor={tag}>{title}</label>
            <select id={id} name={name} className=" bg-[#D9D9D9] border-2 rounded-md border-[#0023FF]" onChange={onChange}>
                <option>Selecciona una opción</option>
                <option>{value1}</option>
                <option>{value2}</option>
            </select>
        </div>
    )
}

export default SelectOptionInput;