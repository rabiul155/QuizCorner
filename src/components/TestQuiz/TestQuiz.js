import React from 'react';
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TestQuiz = ({ quiz }) => {
    const { id, question, options, correctAnswer } = quiz;

    console.log(quiz)

    const notify = (correctAnswer) => {
        toast('Correct ans is ' + correctAnswer)
    }


    return (
        <div className=' border border-2 border-primary p-2 rounded-3 m-4'>

            <div className=' d-flex justify-content-center position-relative'>
                <h3 className=' pb-2 me-5'> {question} </h3>
                <i onClick={() => notify(correctAnswer)} className="fa-solid fa-eye fs-4 position-absolute top-0  end-0"></i>
                <ToastContainer />
            </div>
            <div className=' row row-cols-sm-2 w-75 m-auto '>
                {
                    options.map((option, idx) => <Option
                        key={idx}
                        correctAnswer={correctAnswer}
                        question={question}
                        option={option}
                        id={id}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default TestQuiz;