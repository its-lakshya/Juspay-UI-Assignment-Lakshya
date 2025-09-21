import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile: width < 756,
    isBelowLg: width < 1024,
    isTablet: width < 1280,
    width,
  };
};

export default useScreenSize;
