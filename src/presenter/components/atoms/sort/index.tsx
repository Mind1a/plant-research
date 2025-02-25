import { useState } from 'react';
import { sortIcon } from '../../../assets';
import { AnimatePresence, motion } from 'framer-motion';

const dropdownVariants = {
  hidden: { opacity: 0, top: '50%' },
  visible: { opacity: 1, top: '100%' },
};
const options = ['A-Z', 'Z-A'];
export default function SortDropdown() {
  const [active, setActive] = useState('A-Z');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-[48px] items-center gap-3 rounded-[36px] border border-lightGreen bg-lightGreen px-6"
      >
        <div>
          <img src={sortIcon} alt="sort" />
        </div>
        <div className="font-medium text-primary">
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
                  <button className="text-body font-medium text-charcoalGrey">
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
