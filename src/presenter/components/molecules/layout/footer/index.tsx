import { Link } from 'react-router';

import { fullLogo, iliauniLogo, unilabLogo } from '../../../../assets';
import PageWrapper from '../../../atoms/PageWrapper';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white pb-[18px] pt-[30px] max-1050:pb-2 max-1050:pt-4">
      <PageWrapper>
        <section className="flex flex-col">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img
                className="w-[157px] max-1050:w-[125px]"
                src={fullLogo}
                alt="logo"
              />
            </Link>
            <div className="flex items-center gap-[53px] max-1050:gap-5">
              <Link to="https://unilab.iliauni.edu.ge/" target="_blank">
                <img
                  className="h-[67px] object-contain max-1050:h-8"
                  src={unilabLogo}
                  alt="logo"
                />
              </Link>
              <Link to="https://iliauni.edu.ge/en/" target="_blank">
                <img
                  className="h-[67px] object-contain max-1050:h-8"
                  src={iliauniLogo}
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          <div className="mb-5 mt-[36px] h-[1px] w-full bg-[#DFE4EA] max-1050:mb-1.5 max-1050:mt-4"></div>
          <div>
            <h3 className="text-center font-medium text-lightBlack max-1050:text-sm max-750:text-[10px]">
              Copyright © {year}
            </h3>
          </div>
        </section>
      </PageWrapper>
    </footer>
  );
}
