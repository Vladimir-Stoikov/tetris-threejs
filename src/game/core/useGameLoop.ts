import { useEffect, useRef } from "react";

export const useGameLoop = (callback: () => void) => {
  const savedCallback = useRef<() => void>();


  useEffect(() => {
    savedCallback.current = callback;
  });

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
