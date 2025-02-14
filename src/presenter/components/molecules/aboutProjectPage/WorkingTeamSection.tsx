import ProjectAuthor from '../../atoms/projectAuthor/ProjcetAuthor';
import WorkingTeam from '../../atoms/workingTeam/WorkingTeam';

export default function WorkingTeamSection() {
  return (
    <>
      <section>
        <h2 className="mb-6 text-title-sm font-bold leading-[1.5] text-charcoalGrey max-1000:text-subtitle max-450:text-[16px]">
          პროექტის მუშაობდნენ
        </h2>
        <ProjectAuthor />
        <WorkingTeam />
      </section>
    </>
  );
}
