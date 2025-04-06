import ProjectAuthor from './ProjcetAuthor';
import WorkingTeam from './WorkingTeam';

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
