'use client'
import React from 'react'

function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = React.useState('#about');
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newHash = '#' + entry.target.id;
          setActiveSection(newHash);

          if(window.location.hash !== newHash) {
            window.history.replaceState(null, '', newHash);
          }
        }
      })
    }, {rootMargin: '-50% 0px'});

    sectionIds.forEach(sectionId => {
      const element = document.querySelector(sectionId);
      if(element) {
        observer.observe(element);
      }
    })

    return () => {
      sectionIds.forEach(sectionId => {
        const element = document.querySelector(sectionId);
        if(element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    }

  }, [])
  return activeSection;
}

export default useActiveSection