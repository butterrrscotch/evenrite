import React from 'react';

interface TeamCardProps {
  picture?: {
    medium: string;
  };
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
  };
  email: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ picture, name, location, email }) => {
  return (
    <div className="max-w-md mb-10 items-center">
      <div className="bg-gray-90 rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="flex items-center justify-center">
            {picture && picture.medium && (
              <img className="w-24 h-24 rounded-full" src={picture.medium} alt={`${name.first} ${name.last}`} />
            )}
          </div>
          <div className="text-center mt-4">
            <h2 className="text-lg font-semibold text-white">{name.first} {name.last}</h2>
            <p className="text-sm text-amber-400">{location.city}</p>
          </div>
          <div className="flex mt-2 text-center items-center">
            <p className="text-sm text-white text-center">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
