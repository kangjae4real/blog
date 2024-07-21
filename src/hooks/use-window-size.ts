import { useEffect, useState } from "react";

function getWindowSize() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
}

const useWindowSize = () => {
  const [size, setSize] = useState<{ width: number; height: number }>(getWindowSize());
  const onResize = () => setSize(getWindowSize());

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return size;
};

export default useWindowSize;
