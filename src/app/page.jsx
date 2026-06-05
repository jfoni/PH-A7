import HeroBanner from "@/component/HeroBanner";
import NumberCards from "@/component/NumberCards";
import React from "react";
import FriendsCard from "../component/FriendsCard";
import friends from "../../public/friendsData.json";



const HomePage = () => {
  console.log(friends);
  return (
    <div>
      <HeroBanner></HeroBanner>
      <NumberCards></NumberCards>
      <div className="border-t border-base-200 md:w-10/12 mx-auto">
        <h2 className="text-2xl font-semibold mt-10 mb-4">Your Friends</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {
            friends.map((friend) => (
                <FriendsCard key={friend.id} friend={friend}></FriendsCard>
            ))
          }
        </div>


      </div>
    </div>
  );
};

export default HomePage;
