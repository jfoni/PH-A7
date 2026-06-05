"use client"
import React, { useContext, useMemo } from 'react';
import { PieChart, Pie } from 'recharts';
import { FriendsContext } from '@/context/ProfileContext';

const Chart = () => {
    const { timeLine } = useContext(FriendsContext);

    const data = useMemo(() => {
        const counts = { call: 0, text: 0, video: 0 };

        timeLine.forEach(t => {
            if (t.type in counts) {
                counts[t.type]++;
            }
        });

        return Object.entries(counts)
            .filter(([, count]) => count > 0)
            .map(([action, count]) => ({
                name: action.charAt(0).toUpperCase() + action.slice(1),
                value: count,
                fill:
                    action === 'call'  ? '#ef4444' :
                    action === 'text'  ? '#3b82f6' :
                    action === 'video' ? '#8b5cf6' : '#6b7280'
            }));
    }, [timeLine]);



    if (data.length === 0) return (
    <div className='border border-neutral-200 p-4 rounded-md h-110'>
        <p className='text-2xl'>By Interaction Type</p>
        <p className='text-gray-400 text-sm text-center mt-10'>No interactions yet.</p>
    </div>
);

    return (
       <div className='border border-neutral-200 p-4 rounded-md'>
            <p className='text-2xl font-medium'>By Interaction Type</p>
            <div className='w-fit mx-auto'>
                <PieChart className='mt-4' style={{ width: '35vh', maxWidth: '500px', maxHeight: '50vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        cornerRadius="50%"
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                </PieChart>
            </div>
            <div className='flex justify-center gap-10 mt-10'>
                <div className='flex items-center gap-2'>
                    <div className='w-6 h-6 bg-[#ef4444]'></div>
                    <p>Call</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-6 h-6 bg-[#3b82f6]'></div>
                    <p>Text</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-6 h-6 bg-[#8b5cf6]'></div>
                    <p>Video</p>
                </div>
            </div>
        </div>
    );
};

export default Chart;