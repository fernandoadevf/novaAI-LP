import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollToElement = useCallback((href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      window.location.href = href;
    }
  }, []);

  return { scrollToElement };
}; 