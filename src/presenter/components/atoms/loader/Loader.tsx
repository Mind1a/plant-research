import { useEffect, useState } from 'react';

import { cn } from '../../../../lib/utils';

export default function Loader() {
  const [animation, setAnimation] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation((prev) => !prev);
    }, 520);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed left-1/2 top-1/2 flex h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-lightGreen">
      {/* line */}
      <svg
        width="25"
        height="62"
        viewBox="0 0 25 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[1.5px] right-[54px]"
      >
        <path
          d="M13.6161 61.325C13.6161 61.325 0.239803 54.7537 1.0698 37.09C1.38105 30.4562 3.71605 24.085 7.4123 18.5675C10.5086 13.9462 16.7798 7.7625 24.6236 1.125"
          stroke="#12C295"
          strokeMiterlimit="10"
          className={cn(animation && 'line-animation')}
        />
      </svg>
      {/* left leaf */}
      <svg
        width="27"
        height="42"
        viewBox="0 0 27 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          `left-leaf absolute left-[17px] top-[20px]`,
          animation && 'leaf-animation'
        )}
      >
        <path
          d="M1.77472 0.110138C1.77472 0.110138 20.7934 11.0564 24.3959 20.5276C24.3959 20.5276 31.1209 33.4375 17.9972 39.5313C17.9972 39.5313 19.5672 19.4776 4.09597 3.80138C4.09597 3.80138 13.5897 17.3526 14.8997 26.7426C15.0297 27.6688 15.2159 28.5813 15.4097 29.4963C15.8009 31.3488 16.2547 35.1175 15.4522 41.07C15.4522 41.07 1.12848 47.7 0.813477 21.9751L1.77472 0.110138Z"
          fill="#12C295"
        />
      </svg>
      {/* middle leaf */}
      <svg
        width="39"
        height="42"
        viewBox="0 0 39 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          `middle-leaf absolute right-[21px] top-[12px]`,
          animation && 'leaf-animation'
        )}
      >
        <path
          d="M38.8123 0.322623C38.8123 0.322623 39.5386 30.9926 26.0198 38.8726C26.0198 38.8726 17.9673 45.3026 6.79606 38.8389C6.79606 38.8389 24.0673 26.4426 32.3461 10.6601C32.3461 10.6601 18.5086 29.7526 5.50356 37.0014C5.50356 37.0014 -7.56519 28.5364 10.5923 14.5189C10.5923 14.5189 35.1248 -1.10488 38.8123 0.322623Z"
          fill="#12C295"
        />
      </svg>
      {/* right leaf */}
      <svg
        width="54"
        height="27"
        viewBox="0 0 54 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          `right-leaf absolute bottom-[23px] right-[15px]`,
          animation && 'leaf-animation'
        )}
      >
        <path
          d="M53.9158 18.6764C53.9158 18.6764 31.5646 28.8189 15.2808 25.9089C15.2808 25.9089 -2.18791 23.2564 0.905842 11.8789C0.905842 11.8789 3.72959 6.9701 46.3646 17.4851C46.3646 17.4851 15.3296 6.47885 2.16334 8.4901C2.16334 8.4901 12.6833 -6.35865 33.9658 4.57135C33.9658 4.57135 46.3333 10.6026 53.9158 18.6764Z"
          fill="#12C295"
        />
      </svg>
    </div>
  );
}
