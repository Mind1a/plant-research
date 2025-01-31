import React from 'react';
import { cn } from '../../../../lib/utils';

export default function PageWrapper({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) {
  return <div className={cn(`pageWrapper`, classname)}>{children}</div>;
}
