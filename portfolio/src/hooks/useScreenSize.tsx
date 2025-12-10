// useScreenSize.ts
import { useState, useEffect } from 'react';

/**
 * Custom hook to get the current screen size (width and height)
 * and automatically update on window resize.
 * * @returns {object} An object containing the current window width and height.
 */
interface ScreenSize {
  width: number | undefined;
  height: number | undefined;
}

const useScreenSize = (): ScreenSize => {
  // Initialize state with undefined so server-side rendering (SSR)
  // or initial render on the client is consistent.
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return screenSize;
};

export default useScreenSize;