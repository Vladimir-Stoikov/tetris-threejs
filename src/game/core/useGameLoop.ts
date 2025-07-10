import { useEffect, useRef } from "react";

export const useGameLoop = (callback: () => void, deps: any[] = []) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback, ...deps]);

  useEffect(() => {
    let frameId: number;

    const loop = () => {
      savedCallback.current?.();
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(frameId);
  }, []);
};
