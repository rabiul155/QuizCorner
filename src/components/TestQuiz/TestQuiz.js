import React from 'react';
import Option from '../Option/Option';

const TestQuiz = ({ quiz }) => {
    const { question, options } = quiz;
    console.log(quiz)

    return (
        <div>
            <h3> {question} </h3>
            <div className=' row row-cols-2 w-75 m-auto '>
                {
                    options.map((option, idx) => <Option
                        key={idx}
                        option={option}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default TestQuiz;