import React from 'react';

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pageWrapper">{children}</div>;
}
