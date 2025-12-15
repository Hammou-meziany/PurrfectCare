import React, { useState } from 'react';
import { PawPrint } from 'lucide-react';

interface CatImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  overlayText?: string;
}

export const CatImage: React.FC<CatImageProps> = ({ src, alt, className = "", overlayText, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-primary-100 ${className}`}>
      {/* Skeleton / Loading State */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center animate-pulse bg-primary-200 z-10">
          <PawPrint className="text-primary-400 w-8 h-8 opacity-50" />
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        {...props}
      />

      {/* Fallback for error */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-400 p-4 text-center z-20">
          <PawPrint className="w-10 h-10 mb-2" />
          <span className="text-xs">Image unavailable</span>
        </div>
      )}
      
      {/* Optional Overlay */}
      {overlayText && isLoaded && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <span className="text-white font-semibold text-sm shadow-sm">{overlayText}</span>
        </div>
      )}
    </div>
  );
};