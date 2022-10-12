import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopoic/QuizTopic';
import './Topics.css';
const Topics = () => {
    const topics = useLoaderData();
    const topicsItem = topics.data;

    return (
        <div>
            <div className='banner'>
                <h1 className=' text-info p-sm-3 fw-bolder'>Welcome to Quiz-Corner</h1>
                <h3 className=' text-info pb-sm-3 fw-bolder'>Make learning awesome!</h3>
                <h5 className=' text-light fw-bolder'>It only takes minutes to create a learning game or trivia quiz on any topic, <br /> in any programming language.</h5>
            </div>

            <div className='row row-cols-sm-2 d-flex justify-content-center row-cols-lg-4 mt-4'>
                {
                    topicsItem.map(topic => <QuizTopic
                        key={topic.id}
                        topic={topic}
                    ></QuizTopic>)
                }
            </div>

        </div>
    );
};

export default Topics;