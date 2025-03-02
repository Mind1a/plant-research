import { useState } from 'react';
import { sortIcon } from '../../../assets';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router';
import { cn } from '../../../../lib/utils';

const dropdownVariants = {
  hidden: { opacity: 0, top: '50%' },
  visible: { opacity: 1, top: '102%' },
};
const options = [
  {
    name: 'A-Z',
    value: 'asc',
  },
  {
    name: 'Z-A',
    value: 'desc',
  },
];
export default function SortDropdown() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const sortParam = searchParams.get('sort');
  const activeDisplayName = sortParam === 'desc' ? 'Z-A' : 'A-Z';

  const [active, setActive] = useState(activeDisplayName);

  const [isOpen, setIsOpen] = useState(false);

  const handleSort = (option: string) => {
    const params = new URLSearchParams(searchParams);
    setActive(option === 'asc' ? 'A-Z' : 'Z-A');

    params.set('sort', option);
    navigate(`?${params.toString()}`);
    setIsOpen(false);
  };
  return (
    <div>
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
            className="absolute right-0 mt-1 w-[222px] bg-white p-5 max-750:w-[100px]"
          >
            <ul>
              {options.map((option) => (
                <li className="sortLi" key={option.name}>
                  <button
                    onClick={() => {
                      handleSort(option.value);
                    }}
                    className="text-body font-medium text-charcoalGrey"
                  >
                    {option.name}
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
