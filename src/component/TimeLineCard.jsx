import React from 'react';
import { IoCallOutline, IoVideocamOutline } from 'react-icons/io5';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { GiHandshake } from 'react-icons/gi';

const TimeLineCard = ({t}) => {
    const typeConfig = {
    call:   { icon: <IoCallOutline className="text-xl" />,      label: "Call" },
    text:   { icon: <FaEnvelopeOpenText className="text-xl" />, label: "Text" },
    video:  { icon: <IoVideocamOutline className="text-xl" />,  label: "Video" },

    };

    const config = typeConfig[t.type];
    return (
          <div className="bg-base-200 rounded-xl px-5 py-4 flex items-center gap-4 w-full shadow-2xl">
            <div className="text-gray-500">{config.icon}</div>
            <div>
                <p className="text-sm">
                    {config.label} with {t.name}
                </p>
                <p className="text-xs text-gray-400">
                     {t.time.dayName}, {t.time.monthName} {t.time.date}, {t.time.year}
                </p>
            </div>
        </div>
    );
};

export default TimeLineCard;