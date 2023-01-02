import clsx from 'clsx';
import { ReactNode, useEffect, useState } from 'react';

export const CenteredLayout = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const [headerHeight, setHeaderHeight] = useState<number>()

  useEffect(() => {
    const header = document.querySelector('header')
    if (header) setHeaderHeight(header.offsetHeight)
  }, [])

  return (
    <div
      className={clsx(
        `flex flex-col items-center justify-center h-[calc(100vh-${headerHeight || 48}px)] pb-32 text-slate-700`,
        className,
      )}
    >
      {children}
    </div>
  );
};
