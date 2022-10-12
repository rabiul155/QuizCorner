import React from 'react';
import './Option.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ id, option, question, correctAnswer }) => {

    console.log(question, id)


    const handleClick = (option) => {

        console.log(id);

        if (option === correctAnswer) {

            toast("Right answer")
        }
        else {

            toast("Wrong answer")
        }


    }


    return (
        <div>
            <p className={`q-option border rounded-3 fw-bold col border-primary p-3 `}>
                <input onClick={() => handleClick(option)} className=' me-3 ' type="radio" name={question} />
                {option}
            </p>

            <ToastContainer />
        </div>
    );
};

export default Option;