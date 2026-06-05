"use client";
import Image from "next/image";
import friends from "../../../../public/friendsData.json";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { FaArchive, FaBell, FaEnvelopeOpenText } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { FriendsContext } from "@/context/ProfileContext";
import { use } from "react";
import { toast } from "react-toastify";

const statColor = {
  "on-track": "bg-green-700",
  "almost due": "bg-orange-400",
  "almost-due": "bg-orange-400",
  overdue: "bg-red-500",
};

const FriendPage = ({ params }) => {
  const { friendId } = use(params);

  const friend = friends.find((f) => f.id === parseInt(friendId));
  const {
    name,
    picture,
    email,
    status,
    tags,
    bio,
    goal,
    next_due_date,
    days_since_contact,
  } = friend;

  const { timeLine, setTimeLine } = useContext(FriendsContext);

  const handleTimeline = (type, name) => {
    const now = new Date();
    const dayName = now.toLocaleDateString("en-US", { weekday: "long" });
    const monthName = now.toLocaleDateString("en-US", { month: "long" });
    const date = now.getDate();
    const year = now.getFullYear();

    const time = {
      dayName,
      monthName,
      date,
      year,
    };

    const info = {
      type,
      name,
      time,
    };

    const array = [...timeLine, info];

    setTimeLine(array);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 min-h-screen w-10/12 mx-auto my-20">
      {/* Left panel */}
      {/* <LeftPanal></LeftPanal> */}
      {/* Left panel */}
      <div className="flex flex-col gap-2">
        <div className="bg-base-100 rounded-xl p-6 flex flex-col items-center gap-2 text-center">
          <Image
            src={picture}
            alt={name}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <h2 className="font-semibold text-lg">{name}</h2>
          <span
            className={`text-xs text-white px-3 py-1 rounded-full ${statColor[status]}`}
          >
            {status}
          </span>
          <div className="flex gap-2 flex-wrap justify-center">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-400">{bio}</p>
          <p className="text-xs text-gray-400">Preferred: email</p>
        </div>

        <div className="bg-base-100 rounded-xl flex flex-col divide-y">
          <button className="py-3 text-sm flex items-center justify-center gap-2">
            <FaBell className=""></FaBell> Snooze 2 Weeks
          </button>
          <button className="py-3 text-sm flex items-center justify-center gap-2">
            <FaArchive></FaArchive> Archive
          </button>
          <button className="py-3 text-sm text-red-500 flex items-center justify-center gap-2">
            <MdDeleteOutline></MdDeleteOutline> Delete
          </button>
        </div>
      </div>

      {/* Right Panel */}
      {/* <RightPanal></RightPanal> */}
      <div className="flex flex-col gap-4 flex-1">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-base-100 rounded-xl p-4 text-center">
            <p className="text-3xl font-semibold">{days_since_contact}</p>
            <p className="text-sm text-gray-400">Days Since Contact</p>
          </div>
          <div className="bg-base-100 rounded-xl p-4 text-center">
            <p className="text-3xl font-semibold">{goal}</p>
            <p className="text-sm text-gray-400">Goal (Days)</p>
          </div>
          <div className="bg-base-100 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">
              {new Date(next_due_date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p className="text-sm text-gray-400">Next Due</p>
          </div>
        </div>

        {/* relationship Goal */}
        <div className="bg-base-100 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Relationship Goal</h3>
            <button className="btn btn-xs">Edit</button>
          </div>
          <p className="text-sm">
            Connect every <strong>{goal} days</strong>
          </p>
        </div>

        <div className="bg-base-100 rounded-xl p-4">
          <h3 className="font-semibold mb-3">Quick Check-In</h3>
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => {handleTimeline("call", name); toast(`Call to ${name}`)}}
              className="btn btn-outline flex flex-col gap-1 h-auto py-4"
            >
              <IoCallOutline className="text-2xl"></IoCallOutline> Call
            </button>
            <button
              onClick={() => {handleTimeline("text", name); toast(`Text to ${name}`)}}
              className="btn btn-outline flex flex-col gap-1 h-auto py-4"
            >
              <FaEnvelopeOpenText className="text-2xl"></FaEnvelopeOpenText>{" "}
              Text
            </button>
            <button
              onClick={() => {handleTimeline("video", name); toast(`Video to ${name}`)}}
              className="btn btn-outline flex flex-col gap-1 h-auto py-4"
            >
              <IoVideocamOutline className="text-2xl"></IoVideocamOutline> Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendPage;