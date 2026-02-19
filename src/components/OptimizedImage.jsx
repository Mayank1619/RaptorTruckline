import { useState } from 'react'

export default function OptimizedImage({ src, alt, className = '', width, height }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`overflow-hidden ${className}`}>
      {/* Placeholder/blur effect while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
      />
    </div>
  )
}
