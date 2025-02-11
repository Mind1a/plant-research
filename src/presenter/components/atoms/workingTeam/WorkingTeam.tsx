import { teamMembers } from '../../../../constants/index';
import { TeamMember } from '../../../../types';
import {
  linkedInIcon,
  dribbbleIcon,
  behanceIcon,
  discordIcon,
} from '../../../assets';

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
    <section className="grid grid-cols-3 gap-4 text-charcoalGrey">
      {Object.entries(groupedTeams).map(([teamName, members]) => (
        <div key={teamName} className="flex flex-col gap-4">
          <h2 className="mb-4 text-xl font-medium">{teamName}</h2>
          {members.map((member, index) => (
            <div
              key={index}
              className="h-full max-h-[112px] w-full max-w-[300px] rounded-lg border p-4 shadow-sm"
            >
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
              <div className="mt-2 flex items-center gap-2">
                {member.socialLinks?.linkedin && (
                  <a href={member.socialLinks.linkedin} target="_blank">
                    <img src={linkedInIcon} alt="LinkedIn" />
                  </a>
                )}
                {member.socialLinks?.discord && (
                  <a href={member.socialLinks.discord} target="_blank">
                    <img src={discordIcon} alt="Discord" />
                  </a>
                )}
                {member.socialLinks?.dribbble && (
                  <a href={member.socialLinks.dribbble} target="_blank">
                    <img src={dribbbleIcon} alt="Dribbble" />
                  </a>
                )}
                {member.socialLinks?.behance && (
                  <a href={member.socialLinks.behance} target="_blank">
                    <img src={behanceIcon} alt="Behance" />
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
