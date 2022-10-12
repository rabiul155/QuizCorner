import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TestQuiz from '../TestQuiz/TestQuiz';

const Quiz = () => {
    const quiz = useLoaderData();
    const name = quiz.data.name;
    const question = quiz.data.questions;

    return (
        <div className='mt-5 text-primary'>
            <h2 className=' fw-bolder '>Quiz Of {name}</h2>
            <div>
                {
                    question.map(quiz => <TestQuiz
                        key={quiz.id}
                        quiz={quiz}
                    ></TestQuiz>)
                }
            </div>
        </div>
    );
};

export default Quiz;