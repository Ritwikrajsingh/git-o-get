import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProfilePinnedRepositories = ({ username, pinnedRepositories }) => {
  return (
    <div className="p-3 shadow-bs1 rounded-md h-full w-full bg-white">
      <p className="text-center mb-5 text-xl font-semibold">
        <div>
          {'@'} {username} Pinned Repositories
        </div>
        <div>
          {'(Total: '}
          {pinnedRepositories.totalCount}
          {')'}
        </div>
      </p>
      <div className="flex flex-col gap-4 max-h-[450px] overflow-y-scroll pt-2 pr-5">
        {pinnedRepositories?.nodes.map((repo) => (
          <Link href={`${repo.url}`} key={repo.id}>
            <a className="flex items-center gap-3 rounded-md shadow-bs5 hover:shadow-bs2 transition-all duration-200 p-2 border-2 border-slate-300">
              <div className="w-full">
                <p className="text-base font-semibold">
                  {repo.name}
                </p>
                <p className="font-normal text-sm">
                  {repo.shortDescriptionHTML}
                </p>
                <p className="font-normal flex items-center text-slate-600 text-xs">
                  <img 
                    src={"/svg/star.svg"}
                    alt="Stars"
                    className="w-3.5 inline"
                  />
                  { repo.stargazerCount }
                  {' | '}
                  <img 
                    color="red"
                    src={"/svg/eye.svg"}
                    alt="Watchers"
                    className="w-3.5 inline"
                  />
                  { repo.watchers.totalCount }
                  {' | '}
                  <img 
                    src={"/svg/fork.svg"}
                    alt="Forks"
                    className="w-3.5 inline"
                  />
                  {repo.forks.totalCount}
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfilePinnedRepositories;
