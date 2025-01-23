import { useState } from 'react';
import { cn } from '../../../../lib/utils';

export default function BurgerMenuIcon({
  isMenuOpen,
}: {
  isMenuOpen: boolean;
}) {
  return (
    <div className={cn(`menu-btn`, isMenuOpen && 'open')}>
      <div className="menu-btn_burger"></div>
    </div>
  );
}
