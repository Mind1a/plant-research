import { NavLink } from 'react-router';
import { NavLinks } from '../../../../constants';
import { fullLogo } from '../../../assets';
import PageWrapper from '../../atoms/PageWrapper';
import { cn } from '../../../../lib/utils';
import SearchInput from '../../atoms/inputs/SearchInput';

export default function Header() {
  return (
    <header className="border-strokeGrey flex h-[84px] items-center border-b">
      <PageWrapper>
        <div className="flex items-center justify-between">
          <div>
            <img className="w-[157px]" src={fullLogo} alt="logo" />
          </div>
          <div className="flex items-center gap-[30px]">
            <ul className="flex items-center gap-6">
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
            <div>
              <SearchInput />
            </div>
          </div>
        </div>
      </PageWrapper>
    </header>
  );
}
