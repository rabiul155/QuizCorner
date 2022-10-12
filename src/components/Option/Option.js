import React from 'react';

const Option = ({ option }) => {
    console.log(option);
    return (
        <div>
            <p className=' border rounded-3 fw-bold col border-primary p-3'><input type="checkbox" name="" id="" /> {option}</p>
        </div>
    );
};

export default Option;