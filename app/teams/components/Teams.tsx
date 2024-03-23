import React from 'react';

const TeamCard = ({ props }) => {
  return (
    <div className="max-w-md mb-10 items-center">
      <div className="bg-gray-90 rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="flex items-center justify-center">
            <img className="w-24 h-24 rounded-full" src={props.picture.medium} alt={`${props.name.first} ${props.name.last}`} />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-lg font-semibold text-white">{props.name.first} {props.name.last}</h2>
            <p className="text-sm text-amber-400">{props.location.city}</p>
          </div>
          <div className="flex mt-2 text-center items-center">
            <p className="text-sm text-white text-center">{props.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
