import { useState } from 'react';
import { Package } from 'lucide-react';

interface SampleCardImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
}

export function SampleCardImage({
  src,
  alt,
  fallbackTitle,
  className = '',
}: SampleCardImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-zinc-100 via-zinc-50 to-zinc-200/70 text-zinc-500 p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Package className="w-8 h-8 text-zinc-400 mb-2" strokeWidth={1.5} />
        <span className="text-sm font-medium text-zinc-700">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
