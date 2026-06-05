"use client"
import Chart from "./Chart";

const StatsPage = () => {
    return (
        <div className="md:w-10/12 mx-auto my-20 space-y-6">
            <h1 className="text-5xl font-bold ">Friendship Analytics</h1>
            <Chart></Chart>
        </div>
    );
};

export default StatsPage;