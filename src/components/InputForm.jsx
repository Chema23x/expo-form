
const InputForm = ({tag, labelValue, name, type}) => {
    return(
        <div className="flex flex-col w-5/6">
            <label className="mb-2 font-semibold" htmlFor={tag}>{labelValue}</label>
            <input type={type} name={name} className=" bg-[#D9D9D9] border-2 rounded-md border-[#0023FF]"  />
        </div>
    )
}

export default InputForm;