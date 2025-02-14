import { projectAuthorInfo } from '../../../../constants/index';

export default function ProjectAuthor() {
  return (
    <div className="mb-[96px] flex items-center justify-center max-1000:flex-col">
      <img
        src={projectAuthorInfo.image}
        alt="project author"
        className="ma-:1000:mx-auto h-full max-h-[270px] w-full max-w-[270px] rounded-md max-1000:max-h-[391px] max-1000:max-w-[382px]"
      />
      <div className="ml-[30px] max-1000:ml-0 max-1000:mt-4">
        <h3 className="max-1000: mb-4 text-2xl font-bold leading-[1.5] text-charcoalGrey max-1000:mb-3 max-1000:text-[20px] max-450:text-[16px]">
          {projectAuthorInfo.name}
        </h3>
        <p className="mb-6 text-xl max-1000:text-lg">პროექტის ავტორი</p>
        <p className="text-body-md leading-[21px] text-charcoalGrey">
          {projectAuthorInfo.description}
        </p>
      </div>
    </div>
  );
}
