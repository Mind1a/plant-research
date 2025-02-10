import { cn } from '../../../../lib/utils';

const VideoPlayer = ({
  src,
  classname,
}: {
  src: string;
  classname?: string;
}) => {
  return (
    <video className={cn(`h-full w-full object-cover`, classname)} controls>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
