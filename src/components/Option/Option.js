import React from 'react';
import './Option.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ id, option, question, correctAnswer }) => {

    console.log(option)


    const handleClick = (option) => {

        if (option === correctAnswer) {

            toast("Right answer");

        }
        else {

            toast("Wrong answer");

        }

    }

    return (
        <div>
            <div >
                <label className={`q-option m-2 border w-100 rounded-3 fw-bold col border-primary p-2`} for={option}> <input onClick={() => handleClick(option)} className='me-3' type="radio" id={option} name={question} />{option} </label>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Option;