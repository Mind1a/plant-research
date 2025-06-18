import { Link, NavLink } from 'react-router';
import { NavLinks } from '../../../../../constants';
import { fullLogo, searchIcon } from '../../../../assets';
import PageWrapper from '../../../atoms/PageWrapper';
import { cn } from '../../../../../lib/utils';
import SearchInput from '../../../atoms/inputs/SearchInput';
import BurgerBtn from '../../../atoms/buttons/BurgerBtn';
import BurgerMenuIcon from '../../../atoms/burgerMenuIcon';
import { useState } from 'react';
import MobileMenu from './mobileMenu';
import BurgerBtnSearch from '../../../atoms/buttons/BurgerBtnSearch';
import { AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const handleOpenSearch = () => {
    setIsSearchOpen(true);
  };
  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header>
      <div className="relative z-10 flex h-[84px] items-center border-b border-strokeGrey bg-white max-1050:h-[64px]">
        <PageWrapper>
          <div className="flex items-center justify-between">
            <Link to={'/'}>
              <img
                className="w-[157px] max-1050:w-[125px]"
                src={fullLogo}
                alt="logo"
              />
            </Link>
            <div className="flex items-center gap-[30px]">
              <ul className="flex items-center gap-6 max-1050:hidden">
                {NavLinks.map((link) => (
                  <li key={link.id}>
                    <NavLink
                      className={({ isActive }) =>
                        cn(
                          'text-body font-medium leading-[150%]',
                          isActive ? 'active text-primary' : 'text-charcoalGrey'
                        )
                      }
                      to={link.url}
                    >
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="max-1050:hidden">
                <SearchInput />
              </div>
              <div className="hidden items-center gap-2.5 max-1050:flex">
                <div className="max-550:hidden">
                  <BurgerBtnSearch
                    isOpen={isSearchOpen}
                    onblur={handleCloseSearch}
                    onclick={handleOpenSearch}
                  >
                    <img src={searchIcon} className="h-4 w-4" alt="search" />
                  </BurgerBtnSearch>
                </div>
                <BurgerBtn isOpen={isMenuOpen} onclick={handleToggleMenu}>
                  <BurgerMenuIcon isMenuOpen={isMenuOpen} />
                </BurgerBtn>
              </div>
            </div>
          </div>
        </PageWrapper>
      </div>
      <AnimatePresence>
        {isMenuOpen && <MobileMenu closeMenu={handleCloseMenu} />}
      </AnimatePresence>
    </header>
  );
}
