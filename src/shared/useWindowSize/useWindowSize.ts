import { useState, useEffect } from "react";

const useWindowSize = (video: boolean) => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      if (video) {
        const videoElement = document.getElementById("videoAccueil");
        if (videoElement?.offsetHeight) {
          setSize({
            width: videoElement.offsetWidth,
            height: videoElement.offsetHeight,
          });
          return;
        }
      }
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [video]);

  return size;
};

export default useWindowSize;
