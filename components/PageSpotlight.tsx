'use client';

import { type CSSProperties, type ReactNode, useState } from 'react';

type PageSpotlightProps = {
  children: ReactNode;
};

export function PageSpotlight({ children }: PageSpotlightProps) {
  const [style, setStyle] = useState<CSSProperties>({});

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    setStyle({
      '--page-spot-x': `${event.clientX}px`,
      '--page-spot-y': `${event.clientY}px`
    } as CSSProperties);
  }

  return (
    <div className="page-spotlight" onMouseMove={handleMove} style={style}>
      {children}
    </div>
  );
}
