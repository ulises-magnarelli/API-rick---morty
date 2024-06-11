import React from 'react'





const InputGroup = ({total, name, setId}) => {



  return (

    <div className="input-group mb-3">


        <select  
            className="form-select" 
            id={name}
            onChange={inputSelected => setId(inputSelected.target.value)}
            >



            <option value="1">Choose...</option>



            {[...Array(total).keys()].map(number=>{
                return (
                    <option value={number + 1}>{name} - {number + 1}</option>   
                )
            })}



        </select>

    </div>

)
}

export default InputGroup