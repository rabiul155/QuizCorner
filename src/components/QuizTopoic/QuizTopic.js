import React from 'react';
import { Link } from 'react-router-dom';
import './QuizTopics.css'

const QuizTopic = ({ topic }) => {


    const { id, name, logo, total } = topic;
    return (
        <div className='m-auto col'>
            <div className="card p-0 card-header mx-auto my-4 " >
                <img src={logo} className="card-img-top bg-dark" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Total Question : {total}</p>
                    <Link className='btn btn-primary w-100' to={`/quiz/${id}`} > Start Quiz</Link>
                </div>
            </div>
        </div>
    );
};

export default QuizTopic;