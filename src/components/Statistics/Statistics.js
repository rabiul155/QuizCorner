import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const topics = useLoaderData();
    const data = topics.data;
    console.log(data);
    return (
        <div className=' text-center'>
            <h3 className=' text-primary m-3'>Simple LineChart </h3>

            <div className=' d-flex justify-content-center'>
                <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;