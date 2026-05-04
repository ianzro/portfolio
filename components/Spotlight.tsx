'use client';

import { type CSSProperties, type ReactNode, useState } from 'react';

type SpotlightProps = {
  children: ReactNode;
  className?: string;
};

export function Spotlight({ children, className = '' }: SpotlightProps) {
  const [style, setStyle] = useState<CSSProperties>({});

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setStyle({
      '--spot-x': `${x}px`,
      '--spot-y': `${y}px`
    } as CSSProperties);
  }

  return (
    <div className={`spotlight ${className}`} onMouseMove={handleMove} style={style}>
      {children}
    </div>
  );
}
