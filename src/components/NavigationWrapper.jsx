'use client';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function NavigationWrapper({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith('/auth');

  return (
    <>
      {!isAuthPage && <Navbar />}
      {children}
    </>
  );
}