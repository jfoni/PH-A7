import React from "react";

const HeroBanner = () => {
  return (
    <div className="mt-20 mb-10 space-y-4">

      {/* hero text */}
      <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">
            Friends to keep close in your life
          </h1>
          <p>
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the <br />relationships that matter most.
          </p>
      </div>

        {/* add friend button */}
      <div className="flex justify-center items-center">
        <button className="btn bg-green-900 text-white">Add Friend</button>
      </div>
    </div>
  );
};

export default HeroBanner;
