import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz = useLoaderData();
    const name = quiz.data.name;
    const question = quiz.data.questions;
    console.log(question);
    return (
        <div className='mt-5'>
            <h2 className=' fw-bolder text-primary'>Quiz Of {name}</h2>
        </div>
    );
};

export default Quiz;