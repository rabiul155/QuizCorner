import React from 'react';
import Option from '../Option/Option';

const TestQuiz = ({ quiz }) => {
    const { id, question, options, correctAnswer } = quiz;

    console.log(quiz)


    return (
        <div className=' border border-2 border-primary p-2 rounded-3 m-4'>
            <h3 className=' pb-2'> {question} </h3>
            <div className=' row row-cols-2 w-75 m-auto '>
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