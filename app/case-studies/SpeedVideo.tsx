"use client";

import { useRef, useEffect } from "react";

interface SpeedVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  rate?: number;
}

export default function SpeedVideo({ rate = 1.5, ...props }: SpeedVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.playbackRate = rate;
  }, [rate]);
  return <video ref={ref} {...props} />;
}
