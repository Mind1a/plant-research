import { useState, useEffect } from 'react';
import ProjectAuthor from '../../atoms/projectAuthor/ProjcetAuthor';
import ProjectAuthorTablet from '../../atoms/projectAuthor/ProjectAuthorTablet';
import WorkingTeam from '../../atoms/workingTeam/WorkingTeam';

// export default function WorkingTeamSection() {

//   return (
//     <>
//       <section>
//         <h2 className="mb-6 text-title-sm font-bold leading-[1.5] text-charcoalGrey max-1000:text-subtitle max-450:text-[16px]">
//           პროექტის მუშაობდნენ
//         </h2>
//         <ProjectAuthor />
//         <WorkingTeam />
//       </section>
//     </>
//   );
// }

export default function WorkingTeamSection() {
  const [showTabletAuthor, setShowTabletAuthor] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setShowTabletAuthor(width >= 700 && width <= 1000);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section>
      <h2 className="mb-6 text-title-sm font-bold leading-[1.5] text-charcoalGrey max-1000:text-subtitle max-450:text-[16px]">
        პროექტის მუშაობდნენ
      </h2>
      {!showTabletAuthor && <ProjectAuthor />}
      {showTabletAuthor && <ProjectAuthorTablet />}
      <WorkingTeam />
    </section>
  );
}
