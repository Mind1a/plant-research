import { useState } from 'react';
import { sortIcon } from '../../../assets';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router';
import { cn } from '../../../../lib/utils';

const dropdownVariants = {
  hidden: { opacity: 0, top: '50%' },
  visible: { opacity: 1, top: '100%' },
};
const options = ['A-Z', 'Z-A'];
export default function SortDropdown() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [active, setActive] = useState(searchParams.get('sort') || 'A-Z');
  const [isOpen, setIsOpen] = useState(false);

  const handleSort = (option: string) => {
    const params = new URLSearchParams(searchParams);
    setActive(option);
    params.set('sort', option);
    navigate(`?${params.toString()}`);
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-[48px] items-center gap-3 rounded-[36px] border border-lightGreen bg-lightGreen px-6 max-750:h-[40px] max-750:px-4"
      >
        <div>
          <img
            className={cn(
              `transition-transform duration-300`,
              isOpen ? 'scale-y-[-1]' : 'scale-y-[1]'
            )}
            src={sortIcon}
            alt="sort"
          />
        </div>
        <div className="font-medium text-primary max-750:hidden">
          <span>დასახელება:</span>
          <span> {active}</span>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            transition={{ duration: 0.4, type: 'spring' }}
            className="absolute mt-1 w-full bg-white p-5"
          >
            <ul>
              {options.map((option) => (
                <li className="sortLi" key={option}>
                  <button
                    onClick={() => {
                      handleSort(option);
                    }}
                    className="text-body font-medium text-charcoalGrey"
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
