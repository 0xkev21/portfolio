'use client';
import React from 'react';
import { usePathname } from 'next/navigation'; // 1. Import usePathname

function useActiveSection(sectionIds: string[]) {
  const pathname = usePathname();
  
  const [activeSection, setActiveSection] = React.useState(
    pathname === '/' ? '/#about' : ''
  );

  React.useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newActiveState = '/#' + entry.target.id;
            setActiveSection(newActiveState);

            const browserHash = '#' + entry.target.id;
            if (window.location.hash !== browserHash) {
              window.history.replaceState(null, '', browserHash);
            }
          }
        });
      },
      { rootMargin: '-40% 0px -59% 0px' },
    );

    sectionIds.forEach((sectionId) => {
      const element = document.querySelector(sectionId.replace('/', ''));
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname, sectionIds]);

  return activeSection;
}

export default useActiveSection;