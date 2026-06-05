import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendsCard = ({friend}) => {
    const {id, name, picture, email, status, tags, bio, goal, next_due_date, days_since_contact } = friend;

     const statColor = {
        "on-track": "bg-green-900",
        "almost due": "bg-orange-400",
        "almost-due": "bg-orange-400",
        "overdue": "bg-red-400",
    };

    return (
        <Link href={`/friend/${id}`}>
            <div className="bg-base-100 rounded-xl p-6 flex flex-col items-center gap-2 text-center shadow-sm">
                <Image src={picture} alt={name} width={80} height={80} className="rounded-full object-cover"></Image>
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-sm text-gray-400">{days_since_contact}d ago</p>
                <div className="flex gap-2 flex-wrap justify-center">
                    {tags.map(tag => (
                        <span key={tag} className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">{tag}</span>
                    ))}
                </div>
                <span className={`text-sm font-semibold px-4 py-1 rounded-full ${statColor[status]} text-white`}>
                    {status.replace("-", " ")}
                </span>
            </div>
        </Link>
           
    );
};

export default FriendsCard;