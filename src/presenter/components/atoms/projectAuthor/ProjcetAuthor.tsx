import { projectAuthorInfo } from '../../../../constants/index';
export default function ProjectAuthor() {
  return (
    <div className="mb-[96px] flex justify-center">
      <img
        src={projectAuthorInfo.image}
        alt="project author"
        className="h-full max-h-[270px] w-full max-w-[270px] rounded-md"
      />
      <div className="ml-[30px]">
        <h3 className="mb-4 text-2xl font-bold leading-[1.5] text-charcoalGrey">
          {projectAuthorInfo.name}
        </h3>
        <p className="mb-6 text-xl">პროექტის ავტორი</p>
        <p className="text-body-md leading-[21px] text-charcoalGrey">
          {projectAuthorInfo.description}
        </p>
      </div>
    </div>
  );
}
