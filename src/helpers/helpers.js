import { useEffect } from 'react';

function getDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useOutsideAlerter(ref, showMenu, menu) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        showMenu(false);
      }
    }
    
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
    
    
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    
  }, [ref, showMenu, menu]);
}

export { getDimensions, useOutsideAlerter };
