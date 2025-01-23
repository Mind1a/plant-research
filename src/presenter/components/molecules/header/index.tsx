import { NavLink } from 'react-router';
import { NavLinks } from '../../../../constants';
import { fullLogo, searchIcon } from '../../../assets';
import PageWrapper from '../../atoms/PageWrapper';
import { cn } from '../../../../lib/utils';
import SearchInput from '../../atoms/inputs/SearchInput';
import BurgerBtn from '../../atoms/buttons/BurgerBtn';
import BurgerMenuIcon from '../../atoms/burgerMenuIcon';
import { useState } from 'react';
import MobileMenu from '../mobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <header className="border-strokeGrey max-1050:h-[64px] flex h-[84px] items-center border-b">
      <PageWrapper>
        <div className="flex items-center justify-between">
          <div>
            <img className="w-[157px]" src={fullLogo} alt="logo" />
          </div>
          <div className="flex items-center gap-[30px]">
            <ul className="max-1050:hidden flex items-center gap-6">
              {NavLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    className={({ isActive }) =>
                      cn(
                        'text-body font-medium leading-[150%]',
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
            <div className="max-1050:hidden">
              <SearchInput />
            </div>
            <div className="max-1050:flex hidden items-center gap-2.5">
              <BurgerBtn
                isOpen={isSearchOpen}
                onclick={() => console.log('first')}
              >
                <img src={searchIcon} className="h-4 w-4" alt="search" />
              </BurgerBtn>
              <BurgerBtn isOpen={isMenuOpen} onclick={handleOpenMenu}>
                <BurgerMenuIcon isMenuOpen={isMenuOpen} />
              </BurgerBtn>
            </div>
          </div>
        </div>
      </PageWrapper>
      {isMenuOpen && <MobileMenu isOpen={isMenuOpen} />}
    </header>
  );
}
