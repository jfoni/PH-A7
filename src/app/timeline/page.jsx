"use client"
import React, { useContext, useState } from 'react';
import { FriendsContext } from '@/context/ProfileContext';
import TimeLineCard from '@/component/TimeLineCard';

const TimeLinePage = () => {

    const types = ['all', 'call', 'text', 'video'];
   const { timeLine, setTimeLine } = useContext(FriendsContext);

   const [filter, setFilter] = useState("all");
    const filtered = filter === 'all' ? timeLine : timeLine.filter(t => t.type === filter);

   console.log(timeLine);

    return (
        <div className="w-10/12 mx-auto my-20">
            <h1 className="text-3xl font-bold mb-6">Timeline</h1>



            <select
                className="select select-bordered mb-6 w-64"
                value={filter}
                onChange={e => setFilter(e.target.value)}
            >

                {types.map(t => <option key={t}>{t}</option>)}
            </select>

            <div className="flex flex-col gap-2">
                {
                    filtered.map((t, index) => (
                        <TimeLineCard key={index} t={t} />
                    ))
                }
                {filtered.length === 0 && (
                    <p className="text-gray-400 text-sm">No entries found.</p>
                )}
            </div>
        </div>
    );
};

export default TimeLinePage;<h1>This is timeline page</h1>