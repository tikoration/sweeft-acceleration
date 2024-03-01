import { useEffect } from 'react';

// Custom hook for infinite scrolling
const useInfiniteScroll = (callback: () => void) => {
  useEffect(() => {
    const handleScroll = () => {
      // Checking if user has scrolled to the bottom of the page within a 200px threshold
      if (
        window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200
      ) {
        callback();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback]);
};

export default useInfiniteScroll;
