"use client";

import { type } from "os";
import { useRef, useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";

export const LazyImage = ({ image, alt, ...imgProps }: Props): JSX.Element => {
  const [src, setsrc] = useState<string>(
    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
  );
  const node = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setsrc(image);
        }
      });
    });
    observer.observe(node.current!);
    return () => {
      observer.disconnect();
    };
  }, [image]);

  return (
    <img
      ref={node}
      width={320}
      height="auto"
      src={src}
      alt={alt}
      className="rounded-lg mt-5"
      {...imgProps}
    />
  );
};
