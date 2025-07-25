import { NavLink } from 'react-router';

import { motion } from 'framer-motion';

import { NavLinks } from '../../../../../../constants';
import { cn } from '../../../../../../lib/utils';
import PageWrapper from '../../../../atoms/PageWrapper';
import SearchInput from '../../../../atoms/inputs/SearchInput';

export default function MobileMenu({ closeMenu }: { closeMenu: () => void }) {
  const menuVariants = {
    closed: {
      y: '-30%',
      opacity: 0,
      transition: { duration: 0.5 },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      y: '-30%',
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <motion.div
        initial="closed"
        animate="open"
        exit="exit"
        variants={menuVariants}
        className="absolute top-[64px] z-[2] hidden w-full bg-white shadow-lg max-1050:block"
      >
        <PageWrapper>
          <motion.div>
            <ul className="max-550:py-y flex flex-col items-start gap-6 py-5 max-550:gap-4">
              <div className="hidden w-full">
                <SearchInput classname="w-full" />
              </div>
              {NavLinks.map((link) => (
                <li key={link.id} className="borderBottomNotLast w-full">
                  <NavLink
                    className={({ isActive }) =>
                      cn(
                        'block !w-full text-lg font-medium leading-[150%]',
                        isActive ? 'active text-primary' : 'text-charcoalGrey'
                      )
                    }
                    onClick={closeMenu}
                    to={link.url}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        </PageWrapper>
      </motion.div>

      {/* Background overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed left-0 top-[64px] z-[1] hidden h-full w-full cursor-pointer bg-charcoalGrey max-1050:block"
        onClick={closeMenu}
      />
    </>
  );
}
