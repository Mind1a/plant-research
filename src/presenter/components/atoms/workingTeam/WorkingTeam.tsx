import { teamMembers } from '../../../../constants/index';
import { TeamMember } from '../../../../types';
import LinkedInIcon from '../../../../assets/svgs/linkedIn.svg?react';
import DribbbleIcon from '../../../../assets/svgs/dribble.svg?react';
import BehanceIcon from '../../../../assets/svgs/behance.svg?react';
import DiscordIcon from '../../../../assets/svgs/discrod.svg?react';

export default function WorkingTeam() {
  const groupedTeams: Record<
    'პროექტის მენეჯერები' | 'დიზაინის გუნდი' | 'დეველოპერების გუნდი',
    TeamMember[]
  > = {
    'პროექტის მენეჯერები': teamMembers.filter(
      (m) => m.team === 'Project Management'
    ),
    'დიზაინის გუნდი': teamMembers.filter((m) => m.team === 'Design Team'),
    'დეველოპერების გუნდი': teamMembers.filter(
      (m) => m.team === 'Development Team'
    ),
  };
  return (
    <section className="grid grid-cols-3 gap-4 text-charcoalGrey max-1000:grid-cols-2 max-1000:justify-between max-700:grid-cols-1">
      {Object.entries(groupedTeams).map(([teamName, members]) => (
        <div key={teamName} className="flex flex-col gap-4 max-1000:mb-8">
          <h2 className="mb-6 text-xl font-medium max-1000:mb-0 max-1000:text-lg">
            {teamName}
          </h2>
          {members.map((member, index) => (
            <div
              key={index}
              className="h-full max-h-[112px] w-full max-w-[300px] rounded-lg border px-[23px] py-[15px] max-1000:max-w-full"
            >
              <h3 className="mb-1">{member.name}</h3>
              <p className="text-xs leading-[18px]">{member.position}</p>
              <div className="mt-3 flex items-center gap-2">
                {member.socialLinks?.linkedin && (
                  <a
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    className="group"
                  >
                    <LinkedInIcon className="transition-all duration-1000 group-hover:[&>path:first-child]:fill-[#0E76A8]" />
                  </a>
                )}
                {member.socialLinks?.discord && (
                  <a
                    href={member.socialLinks.discord}
                    target="_blank"
                    className="group"
                  >
                    <DiscordIcon className="transition-all duration-300 group-hover:[&>path]:fill-[#5865F2]" />
                  </a>
                )}
                {member.socialLinks?.dribbble && (
                  <a
                    href={member.socialLinks.dribbble}
                    target="_blank"
                    className="group"
                  >
                    <DribbbleIcon className="transition-all duration-300 group-hover:[&>path]:fill-[#C7306B]" />
                  </a>
                )}
                {member.socialLinks?.behance && (
                  <a
                    href={member.socialLinks.behance}
                    target="_blank"
                    className="group"
                  >
                    <BehanceIcon className="transition-all duration-300 group-hover:[&>path]:fill-[#0057FF]" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
