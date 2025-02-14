import { projectAuthorInfo } from '../../../../constants/index';

export default function ProjectAuthorTablet() {
  return (
    <div className="mb-[96px] flex flex-row justify-center gap-[60px]">
      <div className="flex flex-col">
        <img
          src={projectAuthorInfo.image}
          alt="project author"
          className="w-full min-w-[190px] max-w-[190px]"
        />
        <h3 className="mt-3 text-2xl font-bold leading-[1.5] text-charcoalGrey max-1000:text-[20px] max-450:text-[16px]">
          {projectAuthorInfo.name}
        </h3>
        <p className="mb-6 mt-2 text-lg">პროექტის ავტორი</p>
      </div>
      <p className="text-body-md leading-[27px] text-charcoalGrey">
        {projectAuthorInfo.description}
      </p>
    </div>
  );
}
