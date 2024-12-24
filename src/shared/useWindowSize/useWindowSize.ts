import { useState, useEffect } from "react";

const useWindowSize = (video: boolean) => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const videoElement = document.getElementById("videoAccueil");
  const videoWidth = videoElement?.offsetWidth ?? 0;
  const videoHeight = videoElement?.offsetHeight ?? 0;

  useEffect(() => {
    const handleResize = () => {
      if (video && videoElement?.offsetHeight) {
        setSize({
          width: videoWidth,
          height: videoHeight,
        });
      } else setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [video, window, videoElement]);

  return size;
};

export default useWindowSize;
