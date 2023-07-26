import React, { ReactNode } from 'react';
const Layout: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({children,className=""}) => {
  return (
    <div className={`${className} p-10 w-full h-full xl:p-24 lg:p-16 md:p-12 sm:p-8 `}>{children}</div>
  )
}

export default Layout