import { NavLink } from 'react-router';
import { NavLinks } from '../../../../constants';
import { cn } from '../../../../lib/utils';
import PageWrapper from '../../atoms/PageWrapper';
import { motion } from 'framer-motion';
export default function MobileMenu({ isOpen }: { isOpen: boolean }) {
  const menuVariants = {
    closed: { y: '-30%', opacity: 0, transition: { duration: 0.5 } },
    open: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  return (
    <>
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        exit="closed"
        variants={menuVariants}
        className="max-1050:block absolute top-[66px] hidden w-full rounded-md bg-white shadow-lg"
      >
        <PageWrapper>
          <motion.div>
            <ul className="flex flex-col items-start gap-6 py-8">
              {NavLinks.map((link) => (
                <li key={link.id} className="borderBottomNotLast w-full">
                  <NavLink
                    className={({ isActive }) =>
                      cn(
                        'text-lg font-medium leading-[150%]',
                        isActive ? 'text-primary active' : 'text-charcoalGrey'
                      )
                    }
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
      <div className="fixed left-0 top-[64px] z-[-1] h-full w-full bg-black opacity-50"></div>
    </>
  );
}
