"use client"

import useTeams from '@/hooks/useTeams';
import TeamCard from '@/app/teams/components/Teams';

const Teams = () => {
  const { data: dataUsers } = useTeams();

  return (
    <div className="py-10 px-4 lg:px-20 rounded-lg">
      <h1 className="bold-40 text-center mb-5">For Life Teams. Teams For Life.</h1>
      <p className="regular-16 text-gray-30 text-center mb-10 mr-20 ml-20">At For Life Group, our team is the driving force behind our success. Each member plays a crucial role in creating memorable experiences for our guests. Meet the faces behind For Life Group.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dataUsers?.results?.map((user: any) => (
          <TeamCard key={user.id.value} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Teams;
