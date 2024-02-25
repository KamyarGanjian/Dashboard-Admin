import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { xAxisData } from '../../datas';

import './Chart.css';

export default function Chart({ title, data, dataKey, grid }) {
    return (
        <div className='chart'>
            <h3 className="chartTitle">فروش ماهانه</h3>
            <ResponsiveContainer width="100%" aspect={4}>
                <LineChart data={data}>
                    {xAxisData && <XAxis dataKey="name" stroke='#555' />}
                    <Line type='monotone' dataKey='sale' stroke='rgb(255, 112, 159)' />
                    <Tooltip />
                    {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="10" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}