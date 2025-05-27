import { useEffect } from "react";

export const useGameLoop = (callback: () => void ) => {
  useEffect(() => {
    let frameId: number;
    const loop = () => {
      callback();
      frameId = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(frameId);
  }, [callback]);
};