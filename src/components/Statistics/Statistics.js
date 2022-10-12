import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const topics = useLoaderData();
    const data = topics.data;
    console.log(data);
    return (
        <div className=' text-center'>
            <h3 className=' text-primary m-3'>Simple LineChart </h3>
            <ResponsiveContainer width="95%" height={400}>
                <LineChart width={700} height={300} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;