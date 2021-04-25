import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({addNew}) => {
    const [inputValue, setInputValue] = useState('');
    const handlerInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length >2){
            addNew(cats=>[inputValue, ...cats ]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handlerInputChange}
                value={inputValue}
            />
        </form>
    )
}

AddCategory.propTypes={
    addNew: PropTypes.func.isRequired
}
export default AddCategory




