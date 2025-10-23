import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export default function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const images = [
      '/logo.png',
      '/img1.jpg',
      '/myIMG.jpg',
      '/dec_sal1_thumb.png',
      '/sal1.jpg',
      '/sal2.jpg',
      '/sal3.jpg',
      '/sal4.jpg',
      '/sal5.jpg',
      '/project2.jpg',
      '/project3.jpg',
      '/project4.jpg',
      '/project5.jpg'
    ];

    let loadedCount = 0;
    const totalImages = images.length;

    const loadImage = (src: string) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / totalImages) * 100));
          resolve(src);
        };
        img.onerror = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / totalImages) * 100));
          resolve(src);
        };
        img.src = src;
      });
    };

    Promise.all(images.map(loadImage)).then(() => {
      setTimeout(onLoadComplete, 500);
    });
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        <img src="/logo.png" alt="Trefle Logo" className="w-16 h-16 mx-auto mb-8" />
        <h1 className="text-2xl font-light mb-8" style={{ color: '#ef8cac' }}>Trefle</h1>
        <div className="w-64 h-2 bg-neutral-200 rounded-full overflow-hidden">
          <div 
            className="h-full transition-all duration-300 rounded-full"
            style={{ 
              width: `${progress}%`,
              backgroundColor: '#ef8cac'
            }}
          />
        </div>
        <p className="mt-4 text-neutral-600">{progress}%</p>
      </div>
    </div>
  );
}