
import { useEffect, useRef } from "react";

export const useGameLoop = (callback: () => void, dependencies: React.DependencyList = []) => {
  const savedCallback = useRef<() => void>();

 
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let frameId: number;
    let running = true;

    const loop = () => {
      if (!running) return;
      savedCallback.current?.();
      frameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      running = false;
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, dependencies); 
};