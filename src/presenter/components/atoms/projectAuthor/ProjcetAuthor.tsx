import { projectAuthorInfo } from '../../../../constants/index';

export default function ProjectAuthor() {
  return (
    <section className="] mb-[96px] grid grid-cols-[300px_1fr] grid-rows-2 flex-col gap-0 max-1000:grid-cols-[240px_1fr] max-700:flex">
      <img
        src={projectAuthorInfo.image}
        alt="project author"
        className="col-start-1 row-span-2 h-full max-h-[270px] w-full max-w-[270px] rounded-md max-1000:row-span-1 max-1000:min-w-[190px] max-1000:max-w-[190px] max-700:mx-auto max-700:max-h-[391px] max-700:max-w-[382px]"
      />
      <div className="max-1000: max-1000: col-start-2 row-span-1 flex flex-col gap-3 max-1000:col-start-1 max-1000:row-start-2 max-1000:ml-0 max-1000:mt-4">
        <h3 className="text-2xl font-bold leading-[1.5] text-charcoalGrey max-1000:mb-1 max-1000:max-w-[190px] max-1000:text-[20px] max-700:max-w-full">
          {projectAuthorInfo.name}
        </h3>
        <p className="mb-6 text-xl max-1000:text-lg">პროექტის ავტორი</p>
      </div>
      <p className="col-start-2 row-start-2 mt-[-30px] text-justify text-body-md leading-[1.8] text-charcoalGrey max-1000:row-span-2 max-1000:mt-0 max-1000:text-body-md">
        {projectAuthorInfo.description}
      </p>
    </section>
  );
}
